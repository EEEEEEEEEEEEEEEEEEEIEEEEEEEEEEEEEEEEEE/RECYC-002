var express = require('express');
var router = express.Router();
var CourseModel = require('../models').Course;
var sha1 = require('sha1');
var md5 = require('md5');
var MESSAGE = require('./config').MESSAGE;
var KEY = require('./config').KEY;


router.get('/list', function (req, res, next) {

	var timestamp = new Date().getTime();

	if (req.query.account === undefined || req.query.account === ''
        || req.query.password === undefined || req.query.password === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }

    CourseModel.findAll().then(function(courses) {
        return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, courses: courses})
    });
});


module.exports = router;
