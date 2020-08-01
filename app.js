const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "gritcake",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  initialQuestions();
});

function initialQuestions() {
  inquirer
    .prompt({
      message: "What would you like to do?",
      type: "list",
      choices: [
        "View All Employees",
        "View All Departments",
        "Add Employee",
        "Add Department",
        "Update Employee Role",
        "Add Role",
        "Exit",
      ],
      name: "choice",
    })
    .then((answers) => {
      console.log(answers.choice);
      switch (answers.choice) {
        case "View All Employees":
          viewAllEmployees();
          break;

        case "View All Departments":
          viewAllDepartments();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Update Employee Role":
          updateRole();
          break;

        case "Add Role":
          addRole();
          break;

        default:
          connection.end();
          break;
      }
    });
}

function viewAllEmployees() {
  connection.query("SELECT * FROM employee", function (err, data) {
    console.table(data);
    initialQuestions();
  });
}

function viewAllDepartments() {
  connection.query("SELECT * FROM department", function (err, data) {
    console.table(data);
    initialQuestions();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the first name of the employee?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the last name of the employee?",
      },
      {
        type: "number",
        name: "roleId",
        message: "What is the employee's role ID",
      },
      {
        type: "number",
        name: "managerId",
        message: "What is the employees manager's ID?",
      },
    ])
    .then(function (res) {
      connection.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [res.firstName, res.lastName, res.roleId, res.managerId],
        function (err, data) {
          if (err) throw err;
          console.log("Employee Added!");
          initialQuestions();
        }
      );
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "What is the name of the department that you want to add?",
      },
    ])
    .then(function (res) {
      connection.query(
        "INSERT INTO department (name) VALUES (?)",
        [res.department],
        function (err, data) {
          if (err) throw err;
          console.log("Department Added!");
          initialQuestions();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        message: "What is the role's title?",
        type: "input",
        name: "title",
      },
      {
        message: "What is the role's salary?",
        type: "number",
        name: "salary",
      },
      {
        message: "What is the role's department id?",
        type: "number",
        name: "department_id",
      },
    ])
    .then(function (response) {
      connection.query(
        "INSERT INTO roles (title, salary, department_id) values (?, ?, ?)",
        [response.title, response.salary, response.department_id],
        function (err, data) {
          console.table(data);
        }
      );
      console.log("Role added!");
      initialQuestions();
    });
}

function updateRole() {
  inquirer
    .prompt([
      {
        message:
          "What is the first name of the employee you would like to update?",
        type: "input",
        name: "name",
      },
      {
        message: "What is their new role id?",
        type: "number",
        name: "role_id",
      },
    ])
    .then(function (response) {
      connection.query(
        "UPDATE employee SET role_id = ? WHERE first_name = ?",
        [response.role_id, response.name],
        function (err, data) {
          console.table(data);
        }
      );
      console.log("Employee Role Updated!");
      initialQuestions();
    });
}
