var express = require('express');
var router = express.Router();
var UserModel = require('../../models/index').User;
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

  UserModel.findAll().then(function (users) {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, users: users})
  });
});

router.get('/list', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.ids === undefined || req.query.ids === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  UserModel.findAll({
    where: {
      id: req.query.ids.split(',')
    }
  }).then(function (users) {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, users: users})
  });
});

router.get('/show/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR})
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  UserModel.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (user) {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, user: user})
  });
});

router.get('/create', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.user_id === undefined || req.query.user_id === ''
    || req.query.user_account === undefined || req.query.user_account === ''
    || req.query.user_password === undefined || req.query.user_password === ''
    || req.query.user_name === undefined || req.query.user_name === ''
    || req.query.user_sex === undefined || req.query.user_sex === ''
    || req.query.user_age === undefined || req.query.user_age === ''
    || req.query.user_weight === undefined || req.query.user_weight === ''
    || req.query.user_fat === undefined || req.query.user_fat === ''
    || req.query.user_wechat === undefined || req.query.user_wechat === ''
    || req.query.user_connect === undefined || req.query.user_connect === ''
    || req.query.user_note === undefined || req.query.user_note === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }


  var user = {
    user_id: req.query.user_id,
    user_account: req.query.user_account,
    user_password: req.query.user_password,
    user_name: req.query.user_name,
    user_sex: req.query.user_sex,
    user_age: req.query.user_age,
    user_height: req.query.user_height,
    user_weight: req.query.user_weight,
    user_muscle: req.query.user_muscle,
    user_bone: req.query.user_bone,
    user_protein: req.query.user_protein,
    user_weight_without_fat: req.query.user_weight_without_fat,
    user_fat: req.query.user_fat,
    user_water: req.query.user_water,
    user_whr: req.query.user_whr,
    user_bmi: req.query.user_bmi,
    user_pbf: req.query.user_pbf,
    user_visceral_fat: req.query.user_visceral_fat,
    user_sbw: req.query.user_sbw,
    user_weight_control: req.query.user_weight_control,
    user_basal_metabolism: req.query.user_basal_metabolism,
    user_health_score: req.query.user_health_score,
    user_control_fat: req.query.user_control_fat,
    user_control_muscle: req.query.user_control_muscle,
    user_wechat: req.query.user_wechat,
    user_connect: req.query.user_connect,
    user_note: req.query.user_note,
    user_face: 'http://blog.ursb.me/img/face.png'
  };

  UserModel.create(user).then(function () {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
  });
});

router.get('/edit/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.user_id === undefined || req.query.user_id === ''
    || req.query.user_account === undefined || req.query.user_account === ''
    || req.query.user_name === undefined || req.query.user_name === ''
    || req.query.user_sex === undefined || req.query.user_sex === ''
    || req.query.user_age === undefined || req.query.user_age === ''
    || req.query.user_weight === undefined || req.query.user_weight === ''
    || req.query.user_fat === undefined || req.query.user_fat === ''
    || req.query.user_wechat === undefined || req.query.user_wechat === ''
    || req.query.user_connect === undefined || req.query.user_connect === ''
    || req.query.user_note === undefined || req.query.user_note === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  UserModel.update({
    user_id: req.query.user_id,
    user_account: req.query.user_account,
    user_name: req.query.user_name,
    user_sex: req.query.user_sex,
    user_age: req.query.user_age,
    user_weight: req.query.user_weight,
    user_fat: req.query.user_fat,
    user_wechat: req.query.user_wechat,
    user_connect: req.query.user_connect,
    user_note: req.query.user_note
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
  });
});

router.get('/edit/user_id/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  UserModel.update({
    user_id: req.query.field,
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    UserModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, user: user})
    })
  });
});

router.get('/edit/user_face/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  UserModel.update({
    user_face: req.query.field,
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    UserModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, user: user})
    })
  });
});

router.get('/edit/user_name/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  UserModel.update({
    user_name: req.query.field,
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    UserModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, user: user})
    })
  });
});

router.get('/edit/user_weight/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  UserModel.update({
    user_weight: req.query.field,
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    UserModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, user: user})
    })
  });
});

router.get('/edit/user_fat/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  UserModel.update({
    user_fat: req.query.field,
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    UserModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, user: user})
    })
  });
});

router.get('/edit/user_connect/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  UserModel.update({
    user_connect: req.query.field,
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    UserModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, user: user})
    })
  });
});

router.get('/edit/user_note/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  UserModel.update({
    user_note: req.query.field,
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    UserModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, user: user})
    })
  });
});

router.get('/remove/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  UserModel.destory({
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
  });
});

router.get('/search/:query', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === '') {
    return res.jsonp({code: 1000, msg: MESSAGE.PARAMETER_ERROR});
  }
  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }
  UserModel.findAll({
    where: {
      user_name: {
        '$like': '%' + req.params.query + '%'
      }
    }
  }).then(function (users) {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, users: users})
  });
});


module.exports = router;
