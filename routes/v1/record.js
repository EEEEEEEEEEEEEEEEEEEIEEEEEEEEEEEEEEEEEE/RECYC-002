var express = require('express');
var router = express.Router();
var RecordModel = require('../../models/index').Record;
var UserModel = require('../../models/index').User;
var CoachModel = require('../../models/index').Coach;
var CourseModel = require('../../models/index').Course;
var DatingModel = require('../../models/index').Dating;
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
    if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
        return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
    }

    RecordModel.findAll(
        {
            include: [UserModel, CoachModel, CourseModel, DatingModel]
        }
    ).then(function (record) {
        return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, record: record})
    });
});


module.exports = router;
