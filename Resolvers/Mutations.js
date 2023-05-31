const { Employee } = require("../models/Employee");
const { Query } = require("./Queries");

// Defining mutation resolver for Employee Schema
module.exports = {
    Mutation: {
        // It will create a new row in the Employee Table in our database.
        async createEmployee(
            _,
            { employeeInput: { name, job, department, salary, hire_date } }
        ) {
            const createEmployee = await Employee.create({
                name: name,
                job: job,
                department: department,
                salary: salary,
                hire_date: hire_date,
            });
            // It will return the created Employee.
            return createEmployee;
        },

        // If a row with given id exist in our Employee Table it will delete it.
        async deleteEmployee(_, { id }) {
            const user = await Employee.findByPk(id);
            if (user) {
                await Employee.destroy({
                    where: {
                        id: id,
                    },
                });
                return true;
            } else {
                return false;
            }
        },

        // If a row with given id exist in our Employee Table it will edit it using
        // the fields provided in editEmployeeInput.
        async editEmployee(
            _,
            { editEmployeeInput: { id, name, job, department, salary } }
        ) {
            const user = await Employee.findByPk(id);
            if (user) {
                await Employee.update(
                    {
                        name: name,
                        job: job,
                        department: department,
                        salary: salary,
                    },
                    {
                        where: {
                            id: id,
                        },
                    }
                );
                // This will return the updated Employee
                return Query.getEmployeeByID(_, { id });
            } else {
                console.log("User not found");
                return null;
            }
        },
    },
};
