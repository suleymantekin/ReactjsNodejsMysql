var mysql = require('mysql');
var settings = require('./settings.js');
var db;

function connectDatabase() {
    if (!db) {
        settings.multipleStatements = true;
        db = mysql.createConnection(settings);

        db.connect(function (err) {
            if (!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();