var express = require('express');
var router = express.Router();
var DatingModel = require('../../models/index').Dating;
var CourseModel = require('../../models/index').Course;
var CoachModel = require('../../models/index').Coach;
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

  DatingModel.findAll(
      {
          include: [CourseModel]
      }
  ).then(function (datings) {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, datings: datings})
  });
});

router.get('/show/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  DatingModel.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dating) {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, dating: dating})
  });
});

router.get('/create', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.timestamp === undefined || req.query.timestamp === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  var dating = {
    courseId: req.query.courseId,
    coachId: req.query.coachId,
    dating_id: req.query.dating_id,
    dating_place: req.query.dating_place,
    dating_rating: req.query.dating_rating,
    dating_users: '',
    dating_time: req.query.dating_time,
    dating_date: req.query.dating_date,
    dating_capacity: req.query.dating_capacity,
    dating_register: req.query.dating_register,
  }

  DatingModel.create(dating).then(function () {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
  });
});

router.get('/edit/:id', function (req, res, next) {
  return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
});

router.get('/edit/dating_id/:id', function (req, res, next) {
  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  DatingModel.update({
    dating_id: req.query.field
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    DatingModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dating) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, dating: dating})
    })
  });
});

router.get('/edit/dating_title_img/:id', function (req, res, next) {
  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  DatingModel.update({
      dating_title_img: req.query.field
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    DatingModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dating) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, dating: dating})
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

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  DatingModel.update({
    course_teacher: req.query.field
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    DatingModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dating) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, dating: dating})
    })
  });
});

router.get('/edit/dating_capacity/:id', function (req, res, next) {
  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  DatingModel.update({
    dating_capacity: req.query.field
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    DatingModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dating) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, dating: dating})
    })
  });
});

router.get('/remove/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.timestamp === undefined || req.query.timestamp === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  DatingModel.destory({
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
  });
});

module.exports = router;
