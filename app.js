/**
 * Created by liyang on 16/1/1.
 */
//导入第三方组件 start
var koa = require('koa');
var mongo = require('koa-mongo');//mongo 数据库
var views = require('koa-views');//页面渲染
var bodyParser = require('koa-bodyparser');//参数解析
var route = require('koa-route');//路由设置
const serve = require('koa-serve');
//导入第三房组件 end
//导入自定义文件 start
var uploadAction = require('./src/action/UploadAction/UploadAction');
//导入自定义文件 end

//程序开始
var app = koa();
app.use(mongo());
app.use(views());
app.use(bodyParser());
app.use(serve('public'));

//错误处理

app.use(function *(next){
    yield  next;
    if (404 != this.status) return;
    this.status = 404;
    yield  this.render('./views/error')
})

//mark index
app.use(route.get('/',function *(){
    yield  this.render('./views/index')
}))


//外面可能还有一层路由分发

//路由
app.use(route.get('/getpp/:name/:pwd',uploadAction.paserGet));

app.use(route.post('/postpp',uploadAction.paserPost));

app.use(route.post('/fileUpdate', uploadAction.uploadFile));


if(!module.parent) {
    app.listen(3000);
}