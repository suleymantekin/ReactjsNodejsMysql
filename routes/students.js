var express = require('express');
var router = express.Router();

var db = require('../db');


router.get('/', function (req, res, next) {
  db.query('SELECT * FROM Student', function (err, results) {
    if (err) throw err
    res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
  })
});

router.get('/:id', function (req, res, next) {
  db.query('SELECT * FROM Student WHERE idStudent = ' + req.params.id, function (err, results) {
    console.log(err);
    if (err) throw err
    res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
  })
});

router.post('/update/:id', function (req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var birthday = req.body.birthday.toString().slice(0, 10);
  var idStudent = req.body.idStudent;
  db.query('UPDATE Student SET firstName = ?, lastName = ?, birthday = ? WHERE idStudent = ?', [firstName, lastName, birthday, idStudent], function (err, results) {
    console.log(err);
    if (err) throw err
    res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
  })
});

router.post('/add', function (req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var birthday = req.body.birthday.toString().slice(0, 10);
  db.query(`INSERT INTO Student ( firstName, lastName, birthday ) VALUES ( '${firstName}', '${lastName}', '${birthday}')`, function (err, results) {
    console.log(err);
    if (err) throw err
    res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
  })
});

router.post('/delete/:id', function (req, res) {
  var idStudent = req.params.id;
  db.query('DELETE FROM Course_Enrolment WHERE idStudent =  + ?; DELETE FROM Student WHERE idStudent =  + ?;', [idStudent, idStudent], function (err, results) {
    console.log(err);
    if (err) throw err
    res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
  })
});



module.exports = router;
