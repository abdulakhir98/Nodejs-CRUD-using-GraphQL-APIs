const { Employee } = require("../models/Employee");

// Defining query resolver for Employee Schema
module.exports = {
    Query: {
        async getAllEmployees() {
            const employee = await Employee.findAll();
            return employee;
        },
        async getEmployeeByID(_, { id }) {
            const employee = await Employee.findByPk(id);
            return employee;
        },
        async getEmployeeBySalary(_, { salary }) {
            const employee = await Employee.findAll({
                where: {
                    salary: salary,
                },
            });
            return employee;
        },
    },
};
