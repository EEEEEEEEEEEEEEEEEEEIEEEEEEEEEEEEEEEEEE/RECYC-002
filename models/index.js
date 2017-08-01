var sequelize = require('../config/sequelize').sequelize();
var User = sequelize.import('./user');
var Admin = sequelize.import('./admin');
var Bike = sequelize.import('./bike');
var Course = sequelize.import('./course');
var Dating = sequelize.import('./dating');

Course.hasMany(Dating, {foreignKey: 'courseId', targetKey: 'courseId'});
Dating.belongsTo(Course);

sequelize.sync();

exports.User = User;
exports.Admin = Admin;
exports.Bike = Bike;
exports.Course = Course;
exports.Dating = Dating;
