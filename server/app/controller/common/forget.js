const express = require('express');
const router = express.Router();
const mysqlConnection=require('../../../config/db.config');
var md5 = require('md5');

exports.checkMail = (req, res) => {
    mysqlConnection.query('SELECT * FROM user WHERE email= ?',[req.body],(err,rows,fields)=>{
        if(rows.length>0){
            mailOtp(req.body);
            res.json({msg:1})
        }
        else
            res.json({msg:0})  
    })
}

exports.changePass = (req, res) => {
var Emp=req.body;
Emp.password=md5(Emp.password);
console.log(Emp);

    mysqlConnection.query("UPDATE `user` SET password= ? WHERE email=?", [Emp.password,Emp.email],function (err,result){
        if (!err){
            passChnge(Emp);
            res.json({success:true,msg: 'successfully change password',
            });
        }
        else
            console.log(err);
    });
}

exports.verify= (req, res) => {
    console.log(req.params.id);
    mysqlConnection.query('SELECT * FROM user WHERE email= ?',[req.params.id],(err,rows,fields)=>{
        if(rows.length>0){
            mysqlConnection.query("UPDATE  `user` SET status= '1' WHERE email=? ",[req.params.id],function (err,result){
            if (!err)
            res.send("Email verified")
            else
                console.log(err);
            });
        }
        else
        console.log(err);
    });
}