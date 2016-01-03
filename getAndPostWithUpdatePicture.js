/**
 * Created by liyang on 16/1/3.
 */

var uploadAction = require('./src/action/UploadAction/UploadAction');
app.use(route.get('/getpp/:name/:pwd',uploadAction.paserGet));

app.use(route.post('/postpp',uploadAction.paserPost));

app.use(route.post('/fileUpdate', uploadAction.uploadFile));