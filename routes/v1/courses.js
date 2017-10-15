var express = require('express');
var router = express.Router();
var CourseModel = require('../../models/index').Course;
var sha1 = require('sha1');
var md5 = require('md5');
var MESSAGE = require('./config').MESSAGE;
var KEY = require('./config').KEY;
var checkToken = require('./config').checkToken;

router.get('/', function (req, res, next) {

    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }
    
    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }
    
    CourseModel.findAll().then(function(courses) {
        return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, courses: courses})
    });
});

router.get('/show/:id', function (req, res, next) {
    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }
    
    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }
    CourseModel.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(course) {
        return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, course: course})
    });
});

router.get('/create', function (req, res, next) {

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
    
    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
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

router.get('/edit/:id', function (req, res, next) {

    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.token === undefined || req.query.token === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.course_id === undefined || req.query.course_id === ''
        || req.query.course_name === undefined || req.query.course_name === ''
        || req.query.course_content === undefined || req.query.course_content === ''
        || req.query.course_teacher === undefined || req.query.course_teacher === ''
        || req.query.course_capacity === undefined || req.query.course_capacity === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }
    
    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }
    CourseModel.update({
        course_id: req.query.course_id,
        course_name: req.query.course_name,
        course_content: req.query.course_content,
        course_teacher: req.query.course_teacher,
        course_capacity: req.query.course_capacity
    },{
        where: {
            id: req.params.id
        }
    }).then(function() {
        CourseModel.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(course) {
            return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, course: course})
        })
    });
});

router.get('/edit/course_id/:id', function (req, res, next) {
    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === ''
        || req.query.field === undefined || req.query.field === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }
    
    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }
    CourseModel.update({
        course_id: req.query.field
    },{
        where: {
            id: req.params.id
        }
    }).then(function() {
        CourseModel.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(course) {
            return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, course: course})
        })
    });
});

router.get('/edit/course_name/:id', function (req, res, next) {
    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === ''
        || req.query.field === undefined || req.query.field === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }
    
    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }
    CourseModel.update({
        course_name: req.query.field
    },{
        where: {
            id: req.params.id
        }
    }).then(function(course) {
        CourseModel.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(course) {
            return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, course: course})
        })
    });
});

router.get('/edit/course_content/:id', function (req, res, next) {
    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === ''
        || req.query.field === undefined || req.query.field === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }
    
    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }
    CourseModel.update({
        course_content: req.query.field
    },{
        where: {
            id: req.params.id
        }
    }).then(function() {
        CourseModel.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(course) {
            return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, course: course})
        })
    });
});

router.get('/edit/course_teacher/:id', function (req, res, next) {
    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === ''
        || req.query.field === undefined || req.query.field === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }
    
    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }
    CourseModel.update({
        course_teacher: req.query.field
    },{
        where: {
            id: req.params.id
        }
    }).then(function() {
        CourseModel.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(course) {
            return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, course: course})
        })
    });
});

router.get('/edit/course_capacity/:id', function (req, res, next) {
    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === ''
        || req.query.field === undefined || req.query.field === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }
    
    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }
    CourseModel.update({
        course_capacity: req.query.field
    },{
        where: {
            id: req.params.id
        }
    }).then(function() {
        CourseModel.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(course) {
            return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, course: course})
        })
    });
});


router.get('/remove/:id', function (req, res, next) {

    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.token === undefined || req.query.token === ''
        || req.query.timestamp === undefined || req.query.timestamp === '') {
        return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
    }
    
    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }
    CourseModel.destory({
        where: {
            id: req.params.id
        }
    }).then(function() {
        return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
    });
});

module.exports = router;
