/**
 * Created by liyang on 16/1/1.
 */
//导入第三方组件 start
var koa = require('koa');
var mongo = require('koa-mongo');//mongo 数据库
var views = require('koa-views');//页面渲染
var bodyParser = require('koa-bodyparser');//参数解析
route = require('koa-route');//路由设置
const serve = require('koa-serve');
var session = require('koa-session');


//导入第三房组件 end


//程序开始
app = koa();
app.use(mongo());
app.use(views());
app.use(bodyParser());
app.use(serve('public'));

//使用session必须使用app.keys,暂时不知道为神马
app.keys = ['some secret hurr'];
app.use(session(app));

app.use(function *(next){
    console.log(this.cookies.get('name'));
    yield  next;
    console.log(this.session.isNew);
    console.log(this.sessionOptions);
    console.log(this.session.isLogin);
    this.session.isLogin = true
    console.log(this.session.isLogin);
    this.cookies.set('name', 'tobi', { signed: false });
})


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
//mark index
//路由分发 start （类似java里面的struts2配置多个xml文件，这里也是配置后导入）
require('./mongoHandleApp');//数据库处理
require('./io');//聊天处理
require('./getAndPostWithUpdatePicture');//get post 上传图片
require('./admin');//后台管理
//路由分发 end
if(!module.parent) {
    app.server.listen(3000);
}