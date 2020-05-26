//jshint esversion:6
const express=require('express');
const app=express();
app.get('/',function(req,res){
  res.send("<h1>Hello, World!</h1>");
})
app.post('/contact',function(req,res)
{
  res.send("contact @ f20180551@hyderabad.bits-pilani.ac.in");
})
app.listen(5000,function(){
  console.log('Server started on port: 5000');
})

