var express = require('express');
var router = express.Router();
var AdminModel = require('../models').Admin;
var sha1 = require('sha1');
var md5 = require('md5');
var MESSAGE = require('./config').MESSAGE;
var KEY = require('./config').KEY;


router.get('/login', function (req, res, next) {

	var timestamp = new Date().getTime();

	if (req.query.account === undefined || req.query.account === ''
        || req.query.password === undefined || req.query.password === '') {
        res.jsonp({status: 1000, msg: MESSAGE.PARAMETER_ERROR});
        return;
    }

    AdminModel.findOne({
    	where: {
    		account: req.query.account
    	}
    }).then(function(admin) {
    	if (!admin) {
    		return res.jsonp({status: 1002, msg: MESSAGE.USER_NOT_EXIST});
    	}
    	if (sha1(admin.password) !== req.query.password) {
            return res.jsonp({status: 1003, msg: MESSAGE.PASSWORD_ERROR});
        }
        var token = md5((admin.id).toString() + timestamp.toString() + KEY);
        return res.jsonp({status: 0, token: token, uid: admin.id, timestamp: timestamp, msg: MESSAGE.SUCCESS});
    })
});


module.exports = router;
