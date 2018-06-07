
exports.seed = function(knex, Promise) {
      return knex('difficulty').insert([
        { name: 'easy'},
        { name: 'world class'},
        { name: 'legendary'}
      ]);
};
// exports.seed = function(knex, Promise) {
//   return knex('difficulty').del()
//     .then(function () {
//       return knex('difficulty').insert([
//         { name: 'easy'},
//         { name: 'world class'},
//         { name: 'legendary'}
//       ]);
//     });
// };
