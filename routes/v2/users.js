var express = require('express');
var router = express.Router();
var UserModel = require('../../models').User;
var sha1 = require('sha1');
var md5 = require('md5');
var MESSAGE = require('./config').MESSAGE;
var KEY = require('./config').KEY;
var checkToken = require('./config').checkToken;

router.post('/login', function (req, res, next) {
  if (req.body.user_account === undefined || req.body.user_account === '' || req.body.user_password === undefined || req.body.password === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  UserModel.findOne({
    where: {
      user_account: req.body.user_account
    }
  }).then(function (user) {
    if (!user) {
      return res.jsonp({code: 404, msg: MESSAGE.USER_NOT_EXIST});
    } else {
      if (user.user_password === md5(req.body.user_password)) {
        var timestamp = new Date().getTime();
        var token = md5((user.id).toString() + timestamp.toString() + KEY);
        return res.jsonp({
          code: 200,
          msg: MESSAGE.SUCCESS,
          user: user,
          key: {token: token, timestamp: timestamp, uid: user.id}
        });
      } else {
        return res.jsonp({code: 404, msg: MESSAGE.PASSWORD_ERROR});
      }
    }
  })
});

router.post('/register', function (req, res, next) {
  if (req.body.user_account === undefined || req.body.user_account === '' || req.body.user_password === undefined || req.body.password === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  UserModel.findOne({
    where: {
      user_account: req.body.user_account
    }
  }).then(function (user) {
    if (user) {
      return res.jsonp({code: 404, msg: MESSAGE.USER_EXIST});
    } else {
      var userinfo = {
        user_account: req.body.user_account,
        user_password: md5(req.body.user_password),
        user_name: req.body.user_account,
        user_face: 'www.baidu.com'
      };
      UserModel.create(userinfo).then(function () {
        return res.jsonp({code: 200, msg: MESSAGE.SUCCESS});
      })
    }
  })
});

router.post('/', function (req, res, next) {
  if (req.body.uid === undefined || req.body.uid === ''
    || req.body.timestamp === undefined || req.body.timestamp === ''
    || req.body.token === undefined || req.body.token === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (req.body.user_id === undefined || req.body.user_id === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.body.uid, req.body.timestamp, req.body.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  UserModel.findOne({
    where: {
      user_id: req.body.user_id
    }
  }).then(function (user) {
    if (!user) {
      return res.jsonp({code: 404, msg: MESSAGE.USER_NOT_EXIST});
    } else {
      return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, user: user});
    }
  })
});


module.exports = router;
