// Update with your config settings.
const fs = require('fs');
const mysql = require('mysql');

const config = JSON.parse(fs.readFileSync("config/config.json"))

const connection = mysql.createConnection({
  host    : config.host,
  user    : config.user,
  password: config.password,
  port    : config.port,
  database: config.database,

})

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host    : config.host,
      user    : config.user,
      password: config.password,
      database: config.database,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

 staging: {
    client: 'mysql',
    connection: {
      host    : config.host,
      user    : config.user,
      password: config.password,
      database: config.database,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host    : config.host,
      user    : config.user,
      password: config.password,
      database: config.database,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
