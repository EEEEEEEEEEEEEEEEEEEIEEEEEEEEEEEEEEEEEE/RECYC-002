var md5 = require('md5');
var MESSAGE = {
  SUCCESS: '请求成功',
  PARAMETER_ERROR: '参数错误',
  USER_NOT_EXIST: '用户不存在',
  PASSWORD_ERROR: '账号密码错误',
  TOKEN_ERROR: 'TOKEN失效'  // 403
};

var KEY = 'airing';
const QINIU_ACCESS = '';
const QINIU_SECRET = '';
const BUCKET = '';

var checkToken = function (uid, timestamp, token) {
  return token === md5(uid.toString() + timestamp.toString() + KEY)
};

exports.MESSAGE = MESSAGE;
exports.KEY = KEY;
exports.QINIU_ACCESS = QINIU_ACCESS;
exports.QINIU_SECRET = QINIU_SECRET;
exports.BUCKET = BUCKET;
exports.checkToken = checkToken;
