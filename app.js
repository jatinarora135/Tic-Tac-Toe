//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app=express();
app.listen(3000,function(){
    console.log("server is running at prt 3000");

});