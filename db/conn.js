const { Sequelize } = require("sequelize");
require("../config/LoadEnvironment");

// Creating a new Sequelize instance by passing parameters seperately.
const client = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        dialect: "postgres",
        host: process.env.HOST,
        port: process.env.DBPORT,
    }
);

// Connecting to PostgresQL database using sequelize instance created above.
const DbConnection = async () => {
    try {
        await client.authenticate();
        console.log("DB Connected");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

module.exports = { client, DbConnection };
