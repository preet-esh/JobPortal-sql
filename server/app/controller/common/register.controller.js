const express = require('express');
const router = express.Router();
const mysqlConnection=require('../../../config/db.config');
var md5 = require('md5');
// const nodmail=require('./nodmail');
// var jwt = require('jsonwebtoken');

exports.create= (req, res) => {
    let emp = req.body;
    emp.password=md5(emp.password);

    mysqlConnection.query('SELECT * FROM users WHERE email = ? OR mob = ?', [req.body.email,req.body.mob], (err, rows, fields) => {
      if (rows.length==0){
            mysqlConnection.query("INSERT INTO `users` SET ?",[emp],function(err,result){
            if (!err){
                // var mailRes=nodmail(emp.email);
                // console.log(mailRes);
               res.json({"success": true,"message": "Registered Successfully"});
            console.log(result);
          }
        else {
          res.json({"success": false,"message": "Register Cancelled"});	
            console.log(err);
          }
        });
      }   
      else
          res.send("email or number already registered");
  })
  
  }

exports.getIndus= (req, res) => {
  mysqlConnection.query('SELECT * FROM industry', (err, rows, fields) => {
    if (!err)
        res.send(rows);
    else
        console.log(err);
})
}
exports.getCatgry= (req, res) => {
  mysqlConnection.query('SELECT * FROM categary', (err, rows, fields) => {
    if (!err)
        res.send(rows);
    else
        console.log(err);
})
}

