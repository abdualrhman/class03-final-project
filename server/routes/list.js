var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

// knex middleware for logging
knex.on( 'query', function( queryData ) {
    console.log(`KNEX Operation: ${ queryData.sql }`);
});

router.get("/:id", (req, res) => {
  return knex('items').select('items.id', 'items.link', 'items.title', 'items.category_id', 'items.description', 'category.name as category_name', 'category.id as category_table_id').from('items').innerJoin('category', 'items.category_id', 'category.id')
  .where({'items.id': req.params.id})
  .then( function(data) {
    const [newData]= data
    res.send(newData);
  });
});


router.get('/', function(req, res, next) {
  const query = req.query

  let count;
  const qPage = req.query.page || 1;
  const qLimit = req.query.limit || 10;
  const qOffset = (qPage - 1) * qLimit;
  const pageStart = qPage;

  let sqlQuery = knex.select('items.id', 'items.title','items.description', 'items.link','items.category_id', 'items.type_id', 'items.difficulty_id', 'items.rate_down', 'items.rate_up')
  .from('items');

  if (query.category_id){
    sqlQuery = sqlQuery
    .where({'items.category_id' :query.category_id});
  }

  if (query.type_id){
    sqlQuery = sqlQuery
    .where({'items.type_id' :query.type_id})
  }
  if (query.difficulty_id){
    sqlQuery = sqlQuery
    .where({'items.difficulty_id' :query.difficulty_id})
  }

  sqlQuery.then(data =>{
    console.log(data)
    return count = data.length
  }).then(data=>{
    sqlQuery.offset(qOffset).limit(qLimit)
    .then( function(data){
      console.log(data.length)

      const newData = {
        "count": count, "page": qPage, "offset": qOffset, "limit": qLimit, "pageStart": pageStart, "items": [...data]
        }
      res.send(newData);
    });
  })
});
module.exports = router;
