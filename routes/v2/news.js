var express = require('express');
var router = express.Router();
var NewsModel = require('../../models').News;
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

  NewsModel.findAll().then(function (news) {
    return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, news: news})
  });

});

router.get('/id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (req.query.id === undefined || req.query.id === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  NewsModel.findOne({
    where: {
      id: req.query.id
    }
  }).then(function (news) {
    return res.jsonp({code: 200, msg: MESSAGE.SUCCESS, news: news})
  });

});

module.exports = router;
