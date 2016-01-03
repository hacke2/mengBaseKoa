/**
 * Created by liyang on 16/1/3.
 */
'use strict';
var userdao = require('../dao/UserDao');
var userService={
        query:function *(param){
     return yield userdao.query(param);
    },
    queryAdmin:function *(param,param1){
         return yield userdao.queryAdmin(param,param1);
    }
}

module.exports = userService;