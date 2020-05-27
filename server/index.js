//jshint esversion:6

const express = require('express');
const app = express();
const path = require('path');
const renderToString =require( 'react-dom/server');
var React=require( "react");
var ReactDOM=require("react-dom");
app.use(express.static(path.join(__dirname, "..","build")));
app.use(express.static("public"));
const port = process.env.PORT || 6000;
app.listen(port);
console.log('Server started on port :' + port);
var startChrome = require("start-chrome");
startChrome("http://localhost:6000");
