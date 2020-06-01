//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https=require("https");

const app=express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname +"/signup.html");

});

app.get("/signup",function(req,res)
{
    res.sendFile(__dirname +"/signup.html");
});
app.post("/",function(req,res)
{
    const firstName=req.body.fname;

    const lastName=req.body.lname;

  const email=req.body.email;
  const password=req.body.pass;
  //console.log(firstName,lastName,email,password);
  
  const data ={
    members:[
         {
        email_address: email,
        status: "subscribed",
        merge_fields: {
            FNAME: firstName,
            LNAME: lastName
        }
     }

    ]
  };
  const jsonData=JSON.stringify(data);

const url="https://us10.api.mailchimp.com/3.0/lists/eac025a356";
 const options={
    method: "POST",
    auth:"jatin:12c2af5fc4d2942c082abb88565bea45-us10"
 }
  
  const request = https.request(url,options,function(response)
  {
    if(response.statusCode===200)
    {
        res.sendFile(__dirname +"/success.html");

    }
    else
    {
       res.sendFile(__dirname +"/failure.html");
    }
        response.on("data",function(data)
        {
            console.log(JSON.parse(data));
        })
  })
  request.write(jsonData);
  request.end();
  
});
app.listen(process.env.PORT || 3000,function(){
    console.log("server is running at prt 3000");

});

//api key
// 12c2af5fc4d2942c082abb88565bea45-us10

//list id
// eac025a356