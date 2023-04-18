const express = require('express');
const app = express();

app.get("/", function(req,res){
    res.send("hello world");
})

//회사소개 페이지
app.get("/about", function(req,res){
    res.send('회사홈페이지');
})


app.listen(3000,function(req,res){
    console.log("서버가 실행되고 있다")
})


