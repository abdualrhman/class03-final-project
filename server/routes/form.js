var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

router.get('/', function(req, res, next) {
     res.send('form...')
});
router.post('/', function(req, res, next) {
  return knex('items').insert({
    link: req.body.linkValue,
    title : req.body.titleValue,
    description : req.body.textareaValue,
    type : req.body.categoryValue,
    difficulty :  req.body.difficultyValue
      })
        .then( function (result) {
         res.json({ success: true, message: 'ok' });
   })
});

module.exports = router;
