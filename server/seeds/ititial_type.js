exports.seed = function(knex, Promise) {
      return knex('type').insert([
        {name: 'video'},
        {name: 'article'},
        {name: 'other'}
      ]);
};
