
exports.up = function(knex, Promise) {
  knex.schema.table('items', function (table) {
  table.dropColumn('category');
  })
};

exports.down = function(knex, Promise) {

};
