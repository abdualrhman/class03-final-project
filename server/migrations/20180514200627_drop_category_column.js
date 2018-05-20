exports.up = function(knex, Promise) {
  return   knex.schema.table('items', function (table) {
  table.dropColumn('category');
  })
};

exports.down = function(knex, Promise) {

};
