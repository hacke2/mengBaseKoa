/**
 * Created by liyang on 16/1/3.
 */
var userService = require('../../service/UserService');
module.exports.admin = function *admin(){
    yield  this.render('./views/admin');
}

module.exports.adminLogin = function *adminlogin(){
    console.log('aaaaaaaaaaaaa');
    var account = yield userService.queryAdmin(this,{uid:1});
    account.forEach(function(doc){//游标遍历
        console.log(doc);
    })
//    yield  this.redirect('./views/adminChat');
    yield  this.render('./views/adminChat');
}