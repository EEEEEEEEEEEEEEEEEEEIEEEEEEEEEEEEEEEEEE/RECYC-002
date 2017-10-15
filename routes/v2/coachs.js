var express = require('express');
var router = express.Router();
var CoachModel = require('../../models').Coach;
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

    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }

    CoachModel.findAll().then(function(coachs) {
        return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, coachs: coachs})
    });

});

router.get('/ranking', function (req, res, next) {

    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === '') {
        return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
    }

    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }

    CoachModel.findAll({
        where: {
            'coach_ranking_switch': 1
        }
    }).then(function(coachs) {
        return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, coachs: coachs})
    });

});

router.get('/detail', function (req, res, next) {

    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === '') {
        return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
    }

    if (req.query.coachId === undefined || req.query.coachId === '') {
        return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
    }

    if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }

    CoachModel.findAll({
        where: {
            coachId: req.query.coachId
        }
    }).then(function(coach) {
        return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, coach: coach})
    });

});


module.exports = router;
