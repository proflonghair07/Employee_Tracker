
SELECT *
FROM employee;
SELECT *
FROM role;
SELECT *
FROM department;

INSERT into department
    (name)
VALUES
    ("HR");
INSERT into department
    (name)
VALUES
    ("Engineering");
INSERT into department
    (name)
VALUES
    ("Marketing");
INSERT into department
    (name)
VALUES
    ("Accounting");
INSERT into department
    (name)
VALUES
    ("Administration");
INSERT into department
    (name)
VALUES
    ("Sales");


SELECT *
FROM department;

INSERT into role
    (title, salary, department_id)
VALUES
    ("HR Rep", 30000, 1);
INSERT into role
    (title, salary, department_id)
VALUES
    ("Lead Engineer", 75000, 2);
INSERT into role
    (title, salary, department_id)
VALUES
    ("Marketing Specialist", 43000, 3);
INSERT into role
    (title, salary, department_id)
VALUES
    ("Finance Manager", 65000, 4);
INSERT into role
    (title, salary, department_id)
VALUES
    ("Administrative Assistant", 35000, 5);
INSERT into role
    (title, salary, department_id)
VALUES
    ("Regional Sales Manager", 73000, 5);

SELECT *
FROM role;

INSERT into employee
    (first_name, last_name, role_id)
values
    ("Paul", "McCartney", 1);
INSERT into employee
    (first_name, last_name, role_id)
values
    ("John", "Lennon", 2);
INSERT into employee
    (first_name, last_name, role_id)
values
    ("George", "Harrison", 3);
INSERT into employee
    (first_name, last_name, role_id)
values
    ("George", "Martin", 4);
INSERT into employee
    (first_name, last_name, role_id)
values
    ("Billy", "Preston", 5);
INSERT into employee
    (first_name, last_name, role_id)
values
    ("Ringo", "Starr", 6);
INSERT into employee
    (first_name, last_name, role_id)
values
    ("Geoff", "Emerick", 6);

SELECT *
FROM employee;
