var express = require('express');
var router = express.Router();
var CoachModel = require('../../models/index').Coach;
var RecordModel = require('../../models/index').Record;
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

  CoachModel.findAll().then(function(coachs) {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, coachs: coachs})
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
  CoachModel.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(coach) {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, coach: coach})
  });
});

router.get('/create', function (req, res, next) {
  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.coach_account === undefined || req.query.coach_account === ''
    || req.query.coach_password === undefined || req.query.coach_password === ''
    || req.query.coach_name === undefined || req.query.coach_name === ''
    || req.query.coach_head === undefined || req.query.coach_head === ''
    || req.query.coach_card_picture === undefined || req.query.coach_card_picture === ''
    || req.query.coach_work === undefined || req.query.coach_work === ''
    || req.query.coach_place === undefined || req.query.coach_place === ''
    || req.query.coach_work_time === undefined || req.query.coach_work_time === ''
    || req.query.coach_sign === undefined || req.query.coach_sign === ''
    || req.query.coach_sex === undefined || req.query.coach_sex === ''
    || req.query.coach_age === undefined || req.query.coach_age === ''
    || req.query.coach_wechat === undefined || req.query.coach_wechat === ''
    || req.query.coach_openid === undefined || req.query.coach_openid === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  var coach = {
    coach_account: req.query.coach_account,
    coach_password: req.query.coach_password,
    coach_name: req.query.coach_name,
    coach_head: req.query.coach_head,
    coach_card_picture: req.query.coach_card_picture,
    coach_work: req.query.coach_work,
    coach_place: req.query.coach_place,
    coach_work_time: req.query.coach_work_time,
    coach_sign: req.query.coach_sign,
    coach_sex: req.query.coach_sex,
    coach_age: req.query.coach_age,
    coach_wechat: req.query.coach_wechat,
    coach_openid: req.query.coach_openid
  };

  CoachModel.create(coach).then(function () {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
  });
});


// TODO: 编辑接口

router.get('/remove/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.timestamp === undefined || req.query.timestamp === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }

  if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  CoachModel.destory({
    where: {
      id: req.params.id
    }
  }).then(function() {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
  });
});

module.exports = router;
