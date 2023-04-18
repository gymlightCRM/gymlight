const express = require('express');
const app = express();

app.get("/", function(req,res){
    res.send("hello world");
})

app,listen(3000,function(req,res){
    console.log("서버가 실행되고 있다")
})
