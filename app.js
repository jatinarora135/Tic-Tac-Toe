//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app=express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname +"/signin.html");
});
app.get("/signup",function(req,res)
{
    res.sendFile(__dirname +"/signup.html");
});
app.post("/",function(req,res)
{
  var email=req.body.email;
  var password=req.body.pass;
  console.log(email,password);
});
app.listen(3000,function(){
    console.log("server is running at prt 3000");

});