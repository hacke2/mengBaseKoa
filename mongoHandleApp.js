/**
 * Created by liyang on 16/1/3.
 */
var userAction = require('./src/action/UploadAction/UserAction');
//数据库处理 start
app.use(route.get('/toMongoDB',function *(){
    console.log('mongodb');
    yield userAction.queryUser;//yield 暂时的理解就是将异步变同步
}))
//数据库处理 end