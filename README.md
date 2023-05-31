# Nodejs App using GraphQL APIs

I have created a simple Nodejs app having GraphQL apis. It uses Apollo Server and Sequelize ORM. I used PostgresQL database for this project.
<br>

## Stages included in this project
- Created NodeJs Project
- Added GraphQL server in project
- Created Employee Model & Schema
- Created set of Queries and Mutations (resolvers)
- Connected Database to my project
<br>

## Basic Functionalities

| Functionality | Status |
| ---------- | --- |
| Creates an Employee Table in the Database | :white_check_mark: |
| Creates new Employee data/row in the Table | :white_check_mark: |
| Read Employee data/row from the Table | :white_check_mark: |
| Update Employee data/row in the Table | :white_check_mark: |
| Delete an Employee data/row from the Table | :white_check_mark: |
<br>

## Dependencies Used

- [apollo-server](https://www.npmjs.com/package/@apollo/server) version 3.12.0
- [dotenv](https://www.npmjs.com/package/dotenv) version 16.0.3
- [eslint](https://www.npmjs.com/package/eslint) version 8.41.0
- [graphql](https://www.npmjs.com/package/graphql) version 16.6.0
- [lodash](https://www.npmjs.com/package/lodash) version 4.17.21
- [nodemon](https://www.npmjs.com/package/nodemon) version 2.0.22
- [pg](https://www.npmjs.com/package/pg) version 8.11.0
- [sequelize](https://www.npmjs.com/package/sequelize) version 6.31.1
<br>

## How to run

1. Open Visual Studio Code.
2. Open an integrated terminal from Terminal -> New Terminal.
3. Clone this repo using the following git command:

```
git clone https://github.com/abdulakhir98/Nodejs-CRUD-using-GraphQL-APIs.git
```
4. Change your terminal into that new subdirectory:

```
cd Nodejs-CRUD-using-GraphQL-APIs
```
5. Then open it in Visual Studio Code using:

```
code .
```
6. Again, open an integrated terminal from Terminal -> New Terminal.
7. Install node_modules using:

```
npm install
```

8. Rename `.env.example` file to `.env` and provide relevant information. e.g., `DATABASE=postgres`.
9. Finally, run the project using:

```
npm run devStart
```
