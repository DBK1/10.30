var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',           
    user     : 'root',
    password : '123456' ,
    database:'haode'

});

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin',"*");
    connection.query('SELECT id,name FROM dbk',function(err, rows, fields) {
        res.send(rows)
    })
});

router.post('/xq', function(req, res, next) {
    res.header('Access-Control-Allow-Origin',"*");
    connection.query('SELECT connet FROM dbk where id='+req.body.abc+'',
        function(err, rows, fields) {
            res.send(rows)
        })
});

module.exports = router;