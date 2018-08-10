var express = require('express');
var router = express.Router();

var db = require('../db');

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(res.locals.connection)
  db.query('SELECT * FROM actor', function (err, results) {
    if (err) throw err
    res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
  })
});



module.exports = router;
