
exports.seed = function(knex, Promise) {
      return knex('difficulty').insert([
        {id:1, name: 'easy'},
        {id:2, name: 'world class'},
        {id:3, name: 'legendary'}
      ]);
};
