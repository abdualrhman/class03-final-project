
// exports.seed = function(knex, Promise) {
//   return knex('category').del()
//     .then(function () {
//       return knex('category').insert([
//         {id:1,name: 'Webdesign'},
//         {id:2, name: 'NodeJS'},
//         {id:3, name: 'Database'},
//         {id:4,name: 'Architecture' }
//       ]);
//     });
// };

exports.seed = function(knex, Promise) {
  return
      return knex('category').insert([
        {id:1,name: 'Webdesign'},
        {id:2, name: 'NodeJS'},
        {id:3, name: 'Database'},
        {id:4,name: 'Architecture' }
      ]);
};
