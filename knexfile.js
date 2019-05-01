// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/pvd',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }

};