
exports.seed = function(knex, Promise) {
  return knex('type').del()
    .then(function () {
      return knex('type').insert([
        {id:1, name: 'article'},
        {id:2, name: 'video'},
        {id:3, name: 'other'}
      ]);
    });
};
