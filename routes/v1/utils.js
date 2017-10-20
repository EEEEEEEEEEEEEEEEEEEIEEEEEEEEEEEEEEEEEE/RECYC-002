var express = require('express');
var router = express.Router();
var qiniu = require('qiniu');
var MESSAGE = require('./config').MESSAGE;
var checkToken = require('./config').checkToken;

var QINIU_ACCESS = require('./config').QINIU_ACCESS;
var QINIU_SECRET = require('./config').QINIU_SECRET;
var BUCKET = require('./config').BUCKET;

qiniu.conf.ACCESS_KEY = QINIU_ACCESS;
qiniu.conf.SECRET_KEY = QINIU_SECRET;

function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
  return putPolicy.token();
}

/* 获取七牛token */
router.get('/qiniu_token', function (req, res, next) {

  if (req.query.token == undefined || req.query.token == ''
    || req.query.uid == undefined || req.query.uid == ''
    || req.query.timestamp == undefined || req.query.timestamp == ''
    || req.query.filename == undefined || req.query.filename == '') {

    if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
      return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  var qiniu_token = uptoken(BUCKET, req.query.filename);

  return res.jsonp({code: 0, qiniu_token: qiniu_token, msg: MESSAGE.SUCCESS});
});

module.exports = router;
