const { client } = require("../db/conn");

const { DataTypes } = require("sequelize"); //importing DataTypes from sequelize

// Defining Employee Model using sequelize's DataTypes.
const Employee = client.define(
    "Employee",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "CS",
        },
        hire_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "Employee",
        timestamps: false,
    }
);

// It will create the table in the database if it doesn't exist (and does nothing if it already exists).
// Employee.sync({}).then(() => {
//     console.log("User Model Synced!");
// });

module.exports = { Employee };
