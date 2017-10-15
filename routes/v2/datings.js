var express = require('express');
var router = express.Router();
var DatingModel = require('../../models').Dating;
var CourseModel = require('../../models').Course;
var UserModel = require('../../models').User;
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

  DatingModel.findAll().then(function (datings) {
    return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, datings: datings})
  });

});

//查找用户约课列表
router.get('/user', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
      || req.query.timestamp === undefined || req.query.timestamp === ''
      || req.query.token === undefined || req.query.token === '') {
      return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if(!checkToken(req.query.uid, req.query.timestamp, req.query.token)){
      return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  UserModel.findAll({
    include: [{
      model: DatingModel,
      through: {
        where: {userId: req.query.uid}
      }
    }]
  }).then(function (user) {
    return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, datings: user[0].datings})
  });

});

router.get('/course', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (req.query.course_id === undefined || req.query.course_id === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  DatingModel.findOne({
    where: {
      courseId: req.query.course_id,
      finished: 0
    }
  }).then(function (dating) {
    return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, dating: dating})
  });

});

module.exports = router;
