var express = require('express');
var router = express.Router();

var db = require('../db');


router.get('/', function (req, res, next) {
  db.query('SELECT * FROM actor', function (err, results) {
    if (err) throw err
    res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
  })
});



module.exports = router;
