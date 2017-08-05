var express = require('express');
var router = express.Router();
var UserModel = require('../models').User;
var sha1 = require('sha1');
var md5 = require('md5');
var MESSAGE = require('./config').MESSAGE;
var KEY = require('./config').KEY;

router.get('/', function (req, res, next) {
	if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }

	UserModel.findAll().then(function(users) {
		return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, users: users})
	});
});

router.get('/:id', function (req, res, next) {
	if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }

	UserModel.findOne({
		where: {
			id: req.params.id
		}
	}).then(function(user) {
		return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, user: user})
	});
});

router.get('/create', function (req, res, next) {
	if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === ''
        || req.query.user_id === undefined || req.query.user_id === ''
        || req.query.user_account === undefined || req.query.user_account === ''
        || req.query.user_password === undefined || req.query.user_password === ''
        || req.query.user_name === undefined || req.query.user_name === ''
        || req.query.user_sex === undefined || req.query.user_sex === ''
        || req.query.user_age === undefined || req.query.user_age === ''
        || req.query.user_weight === undefined || req.query.user_weight === ''
        || req.query.user_fat === undefined || req.query.user_fat === ''
        || req.query.user_wechat === undefined || req.query.user_wechat === ''
        || req.query.user_connect === undefined || req.query.user_connect === ''
        || req.query.user_note === undefined || req.query.user_note === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }

    var user = {
    	user_id: req.query.user_id,
    	user_account: req.query.user_account,
    	user_password: req.query.user_password,
    	user_name: req.query.user_name,
    	user_sex: req.query.user_sex,
    	user_age: req.query.user_age,
    	user_weight: req.query.user_weight,
    	user_fat: req.query.user_fat,
    	user_wechat: req.query.user_wechat,
    	user_connect: req.query.user_connect,
    	user_note: req.query.user_note
    }

	UserModel.create(user).then(function() {
		return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
	});
});

router.get('/editor/:id', function (req, res, next) {
	if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === ''
        || req.query.user_id === undefined || req.query.user_id === ''
        || req.query.user_account === undefined || req.query.user_account === ''
        || req.query.user_name === undefined || req.query.user_name === ''
        || req.query.user_sex === undefined || req.query.user_sex === ''
        || req.query.user_age === undefined || req.query.user_age === ''
        || req.query.user_weight === undefined || req.query.user_weight === ''
        || req.query.user_fat === undefined || req.query.user_fat === ''
        || req.query.user_wechat === undefined || req.query.user_wechat === ''
        || req.query.user_connect === undefined || req.query.user_connect === ''
        || req.query.user_note === undefined || req.query.user_note === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }
	UserModel.update({
		user_id: req.query.user_id,
    	user_account: req.query.user_account,
    	user_name: req.query.user_name,
    	user_sex: req.query.user_sex,
    	user_age: req.query.user_age,
    	user_weight: req.query.user_weight,
    	user_fat: req.query.user_fat,
    	user_wechat: req.query.user_wechat,
    	user_connect: req.query.user_connect,
    	user_note: req.query.user_note
	},{
		where: {
			id: req.params.id
		}
	}).then(function() {
		return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
	});
});


router.get('/remove/:id', function (req, res, next) {
	if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }

	UserModel.destory({
		where: {
			id: req.params.id
		}
	}).then(function(user) {
		return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
	});
});


module.exports = router;
