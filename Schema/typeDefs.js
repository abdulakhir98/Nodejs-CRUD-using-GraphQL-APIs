const { gql } = require("apollo-server");

// Defining Schema for Employee Model.
const typeDefs = gql`
    type Employee {
        id: Int
        name: String
        job: String
        department: String
        salary: Int
        hire_date: String
    }

    input EmployeeInput {
        name: String
        job: String
        department: String
        salary: Int
        hire_date: String
    }

    input EditEmployeeInput {
        id: Int
        name: String
        job: String
        department: String
        salary: Int
    }

    type Query {
        getAllEmployees: [Employee]
        getEmployeeByID(id: Int!): Employee
        getEmployeeBySalary(salary: Int!): [Employee]
    }

    type Mutation {
        createEmployee(employeeInput: EmployeeInput): Employee!
        deleteEmployee(id: Int!): Boolean
        editEmployee(editEmployeeInput: EditEmployeeInput): Employee
    }
`;

module.exports = typeDefs;
