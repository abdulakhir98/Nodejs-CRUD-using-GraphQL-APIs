const { merge } = require("lodash");
const { ApolloServer } = require("apollo-server");
const { DbConnection } = require("./db/conn");
require("./config/LoadEnvironment");
const port = process.env.PORT;

const typeDefs = require("./Schema/typeDefs");
const queries = require("./Resolvers/Queries");
const mutations = require("./Resolvers/Mutations");

// Passing Schema defination and resolvers to the Apollo Server Instance
const server = new ApolloServer({
    typeDefs,
    resolvers: merge(queries, mutations),
    // Merging all resolvers in a single resolvers object
    // using lodash's merge function
});

// Running DbConnection function to connect to database.
DbConnection();

// Starting Apollo Server on localhost using port defined in .env file.
server.listen(port, () => {
    console.log(`NodeJS API is running on port: ${port}`);
});
