const express = require('express');
const app = express();
const helmet = require("helmet");
const ejs = require("ejs");

 
app.use(helmet());


//미들웨어 주소 부여하기 (로그인 한 유저마다 각 권한에 따른 뷰 뿌려지기)
const mainRouter = require('./router/mainRouter');
app.use('/' ,mainRouter);

// 뷰 이미지 파일 
app.set('view engine','ejs');
app.set('views', './views');
app.use('/public', express.static(_dirname + '/public'));




app.listen(3000,function(req,res){
    console.log("서버가 실행되고 있다")
})
