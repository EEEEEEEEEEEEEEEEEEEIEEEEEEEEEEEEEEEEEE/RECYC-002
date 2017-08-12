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

router.get('/create', function (req, res, next) {

    var timestamp = new Date().getTime();

    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.token === undefined || req.query.token === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.course_id === undefined || req.query.course_id === ''
        || req.query.course_name === undefined || req.query.course_name === ''
        || req.query.course_content === undefined || req.query.course_content === ''
        || req.query.course_teacher === undefined || req.query.course_teacher === ''
        || req.query.course_capacity === undefined || req.query.course_capacity === ''
        || req.query.course_register === undefined || req.query.course_register === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }

    var course = {
        course_id: req.query.course_id,
        course_name: req.query.course_name,
        course_content: req.query.course_content,
        course_teacher: req.query.course_teacher,
        course_capacity: req.query.course_capacity,
        course_register: req.query.course_register,
    }

    CourseModel.create(course).then(function() {
        return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
    });
});



module.exports = router;
