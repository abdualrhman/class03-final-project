//
// exports.seed = function(knex, Promise) {
//   return knex('category').del()
//     .then(function () {
//       return knex('category').insert([
//         {name: 'Webdesign'},
//         { name: 'NodeJS'},
//         { name: 'Database'},
//         {name: 'Architecture' }
//       ]);
//     });
// };

exports.seed = function(knex, Promise) {
      return knex('category').insert([
        {name: 'Webdesign'},
        {name: 'NodeJS'},
        {name: 'Database'},
        {name: 'Git'},
        {name: 'Architecture'}
      ]);
};


// exports.seed = function(knex, Promise) {
//       return knex('type').insert([
//         {name: 'Webdesign'},
//         {name: 'NodeJS'},
//         {name: 'Database'},
//         {name: 'Architecture' }
//       ]);
// };
