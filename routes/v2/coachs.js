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

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  CoachModel.findAll().then(function (coachs) {
    return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, coachs: coachs})
  });

});


router.get('/create', function (req, res, next) {
    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === '') {
        return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
    }
    if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }

    var coach = {
        coach_id: req.query.coach_id,
        coach_account: req.query.coach_account,
        coach_password: req.query.coach_password,
        coach_name: req.query.coach_name,
        coach_sex: req.query.coach_sex,
        coach_age: req.query.coach_age,
        coach_place: req.query.coach_place,
        coach_work_time: req.query.coach_work_time,
        coach_wechat: req.query.coach_wechat,
        coach_connect: req.query.coach_connect,
        coach_sign: req.query.coach_sign
    };

    CoachModel.create(coach).then(function () {
        return res.jsonp({code: 200, msg: MESSAGE.SUCCESS})
    });
});

router.get('/edit/coach_face/:id', function (req, res, next) {

    if (req.query.uid === undefined || req.query.uid === ''
        || req.query.timestamp === undefined || req.query.timestamp === ''
        || req.query.token === undefined || req.query.token === ''
        || req.query.field === undefined || req.query.field === '') {
        return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
    }
    if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }
    CoachModel.update({
        coach_face: req.query.field,
    }, {
        where: {
            id: req.params.id
        }
    }).then(function () {
        CoachModel.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (coach) {
            return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, coach: coach})
        })
    });
});

router.get('/ranking', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  CoachModel.findAll({
    where: {
      'coach_ranking_switch': 1
    }
  }).then(function (coachs) {
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

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  CoachModel.findAll({
    where: {
      coach_id: req.query.coachId
    }
  }).then(function (coach) {
    return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, coach: coach})
  });

});


module.exports = router;
