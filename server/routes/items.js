var express = require('express');
var router = express.Router();
var knex  = require('../helpers/knex');


router.get('/', function(req, res, next) {
  const query = req.query
  if (query.id){
    console.log(req.query + '' + req.query.item)
    return knex().select('items.id', 'items.title', 'items.category_id', 'category.name as category_name', 'category.id as category_table_id').from('items').innerJoin('category', 'items.category_id', 'category.id')
    .where({'items.id': query.id})
    .then( function(data) {
      res.send(data);
    });
  }
  console.log('req.query: '+req.query + ' req.query.item: ' + req.query.item)

  res.send(query);
});

module.exports = router;


// var express = require('express');
// var router = express.Router();
// var knex  = require('../helpers/knex');
//
//
// router.get('/', function(req, res, next) {
//   const query = req.query
//   if (query.category){
//     return knex.select('items.id', 'items.title','items.description', 'items.link','items.category_id', 'items.type_id', 'items.difficulty_id', 'items.rate_down', 'items.rate_up')
//     .from('items').innerJoin('category', 'items.category_id', 'category.id')
//     .where({'category.id' :query.category})
//     .then( function(data) {
//       console.log(data)
//       res.send(data);
//     })
//   }
//
//   res.send(query);
// });
//
// module.exports = router;
