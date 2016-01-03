/**
 * Created by liyang on 16/1/3.
 */
    'use strict';
var userService = require('../../service/UserService');
module.exports.queryUser = function *queryUser() {
    this.body = yield userService.query(this);
};