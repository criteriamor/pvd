exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cities', function(table) {
      table.increments('id').primary();
      table.string('city');
      table.integer('avg_pvw');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('addresses', function(table) {
      table.increments('id').primary();
      table.string('address');
      table.string('pvw');
      table.integer('city_id').unsigned()
      table.foreign('city_id')
        .references('cities.id');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('addresses'),
    knex.schema.dropTable('cities')
  ]);
};