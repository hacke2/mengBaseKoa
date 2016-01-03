/**
 * Created by liyang on 16/1/3.
 */
    'use strict';
var userDao={
    query:function *(param){
    return  param.mongo.db('test').collection('user').findOne();
},
    queryAdmin:function *(param,param2){
        return  param.mongo.db('test').collection('account').find({accounttype:1});
    }


}

module.exports = userDao;