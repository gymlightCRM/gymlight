const express = require('express');
const router = express.Router();


router.get("/", function(req,res){
    
    //그림파일을 전달할 때는 rander 사용
    res.render('index')

})

router.get("/about",function(req,res){
    res.send("회사사이트다");
})

module.exports = router