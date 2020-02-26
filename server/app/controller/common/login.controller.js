const express = require('express');
const router = express.Router();
const mysqlConnection=require('../../../config/db.config');
var md5 = require('md5');
//const nodmail=require('./nodmail');
var jwt = require('jsonwebtoken');


exports.login= (req, res) => {
    var email = req.body.email;
    var password = md5(req.body.password);
    console.log(req.body);
    if (email && password) {
      mysqlConnection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
        if (results.length > 0) {
          var token=jwt.sign({email:results[0].email},'secret',{ expiresIn:5000 });
          console.log(token);
          res.json({"success": true,"message": "Login Successfully","token":token,results});
          } 
          else {
          res.json({ "success": false,"message": "Login Cancelled" });
        }			
        res.end();
      });
    } else {
      res.send('Please enter valid email and Password!');
      res.end();
    }
  }