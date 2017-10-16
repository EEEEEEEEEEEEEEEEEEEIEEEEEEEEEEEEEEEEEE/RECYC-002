var express = require('express');
var router = express.Router();
var BikeModel = require('../../models').Bike;
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

  BikeModel.findAll().then(function (bikes) {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, bikes: bikes})
  });
});

router.get('/show/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.bike_id === undefined || req.query.bike_id === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  BikeModel.findOne({
    where: {
      id: req.params.bike_id
    }
  }).then(function (bike) {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, bike: bike})
  });
});

router.get('/create', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.bike_id === undefined || req.query.bike_id === ''
    || req.query.bike_type === undefined || req.query.bike_type === ''
    || req.query.bike_position === undefined || req.query.bike_position === ''
    || req.query.bike_used === undefined || req.query.bike_used === ''
    || req.query.bike_update === undefined || req.query.bike_update === ''
    || req.query.bike_register === undefined || req.query.bike_register === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  var bike = {
    bike_id: req.query.bike_id,
    bike_type: req.query.bike_type,
    bike_position: req.query.bike_position,
    bike_used: req.query.bike_used,
    bike_update: req.query.bike_update,
    bike_register: req.query.bike_register,
  }

  BikeModel.create(bike).then(function () {
    BikeModel.findOne({
      where: {
        bike_id: req.query.bike_id
      }
    }).then(function (bike) {
      return res.jsonp({code: 0, log: '刘杰容是sb', msg: MESSAGE.SUCCESS, bike: bike})
    })
  })
});

router.get('/edit/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.bike_id === undefined || req.query.bike_id === ''
    || req.query.bike_type === undefined || req.query.bike_type === ''
    || req.query.bike_position === undefined || req.query.bike_position === ''
    || req.query.bike_used === undefined || req.query.bike_used === ''
    || req.query.bike_update === undefined || req.query.bike_update === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  BikeModel.update({
    bike_id: req.query.bike_id,
    bike_type: req.query.bike_type,
    bike_position: req.query.bike_position,
    bike_used: req.query.bike_used,
    bike_update: req.query.bike_update
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
  })
});

router.get('/edit/bike_id/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  BikeModel.update({
    bike_id: req.query.field
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    BikeModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (bike) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, bike: bike})
    })
  })
});

router.get('/edit/bike_type/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  BikeModel.update({
    bike_type: req.query.field
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    BikeModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (bike) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, bike: bike})
    })
  })
});

router.get('/edit/bike_position/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  BikeModel.update({
    bike_position: req.query.field
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    BikeModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (bike) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, bike: bike})
    })
  })
});

router.get('/edit/bike_used/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === ''
    || req.query.field === undefined || req.query.field === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  BikeModel.update({
    bike_used: req.query.field
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    BikeModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (bike) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, bike: bike})
    })
  })
});

router.get('/edit/bike_update/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  BikeModel.update({
    bike_update: new Date().getTime()
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    BikeModel.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (bike) {
      return res.jsonp({code: 0, msg: MESSAGE.SUCCESS, bike: bike})
    })
  })
});
router.get('remove/:id', function (req, res, next) {

  if (req.query.uid === undefined || req.query.uid === ''
    || req.query.timestamp === undefined || req.query.timestamp === ''
    || req.query.token === undefined || req.query.token === '') {
    return res.jsonp({code: 500, msg: MESSAGE.PARAMETER_ERROR});
  }

  if (!checkToken(req.query.uid, req.query.timestamp, req.query.token)) {
    return res.jsonp({code: 403, msg: MESSAGE.TOKEN_ERROR})
  }

  BikeModel.destory({
    where: {
      id: req.params.id
    }
  }).then(function () {
    return res.jsonp({code: 0, msg: MESSAGE.SUCCESS})
  });
});


module.exports = router;
