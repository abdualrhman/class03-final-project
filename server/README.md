# Server
If you are looking for the React client you need to look in [this folder](../client)

## Setup instructions

install the dependencies on your machine:

npm install

### Creating the database ###

Here's how to create a database in mysql:

  create database db;

### connecting to the database ###

Edit the connection info in knexfile.js to the user you just created.


### updating the database using knex  #

-  knex migrate:latest
- knex seed:run



### starting the server ###
- `npm start` starts the server.

Now the server should run on http://localhost:3001

HINT: take a look at http://localhost:3001/categories and ./routes/categories.js
