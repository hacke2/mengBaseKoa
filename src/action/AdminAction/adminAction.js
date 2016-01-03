/**
 * Created by liyang on 16/1/3.
 */
var userService = require('../../service/UserService');
module.exports.admin = function *admin(){
    yield  this.render('./views/admin')
}

module.exports.adminLogin = function *admin(){
    var account = yield userService.queryAdmin(this,{uid:1});
    console.log(account);
    yield  this.render('./views/adminChat');
}