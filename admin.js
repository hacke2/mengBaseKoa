/**
 * Created by liyang on 16/1/3.
 */
var adminAction = require('./src/action/AdminAction/adminAction');
app.use(route.get('/admin',adminAction.admin));
app.use(route.post('/adminLogin',adminAction.adminLogin));