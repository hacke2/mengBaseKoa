/**
 * Created by liyang on 16/1/2.
 */
'use strict';
//mark 这里的get请求过来的参数不是真正意义上的get请求，过来，貌似是从路径上过来的

const multer = require('koa-multer');//二进制上传
const upload = multer({ dest: './public/uploads/' });//不写参数就是二进制的buffer
module.exports.paserGet = function *(name,pwd){
    console.log(name + pwd);
    this.body = name;
}

//可以像json对象那样把他们点出来
module.exports.paserPost = function *(){
    this.body = this.request.body;
}

module.exports.uploadFile = function *() {
    var parser = upload.single('file')//单文件上传
    var parsers = upload.fields([{name:'file',maxCount:1},
        {name:'file2',maxCount:1}]);//多文件上传的时候
    var parts = parsers(this,(a) => {//这里的a不能换成req或者this
        console.log("解析");
    console.log(a.req.body);
    console.log(a.req.files['file'][0]);
    console.log(a.req.files['file2'][0]);
});
}

