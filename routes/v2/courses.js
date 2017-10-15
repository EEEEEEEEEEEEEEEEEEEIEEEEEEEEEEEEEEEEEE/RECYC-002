var express = require('express');
var router = express.Router();
var CourseModel = require('../../models').Course;
var sha1 = require('sha1');
var md5 = require('md5');
var MESSAGE = require('./config').MESSAGE;
var KEY = require('./config').KEY;
var checkToken = require('./config').checkToken;

router.get('/', function (req, res, next) {

    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === '') {
        return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
    }

    if (req.query.course_type === undefined || req.query.course_type === '') {
        return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
    }
    
    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }
    
    CourseModel.findAll({
        where: {
            course_type: req.query.course_type
        }
    }).then(function(courses) {
        return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, courses: courses})
    });
});

router.get('/all', function (req, res, next) {

    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === '') {
        return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
    }

    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }

    CourseModel.findAll().then(function(courses) {
        return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, courses: courses})
    });
});

router.get('/detail', function (req, res, next) {

    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === '') {
        return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
    }

    if (req.query.course_id === undefined || req.query.course_id === '') {
        return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
    }

    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }

    CourseModel.findOne({
        where: {
            course_id: req.query.course_id
        }
    }).then(function(course) {
        return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, course: course})
    });
});


module.exports = router;
