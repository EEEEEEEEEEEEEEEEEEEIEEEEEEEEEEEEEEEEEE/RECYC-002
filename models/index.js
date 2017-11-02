var sequelize = require('../config/sequelize').sequelize();
var User = sequelize.import('./user');
var Admin = sequelize.import('./admin');
var Course = sequelize.import('./course');
var Dating = sequelize.import('./dating');
var Coach = sequelize.import('./coach');
var Company = sequelize.import('./company');
var News = sequelize.import('./news');
var Bike = sequelize.import('./bike');

Course.hasMany(Dating, {foreignKey: 'courseId', targetKey: 'courseId'});
Dating.belongsTo(Course);

Coach.hasMany(Dating, {foreignKey: 'coachId', targetKey: 'coachId'});
Dating.belongsTo(Coach);

Coach.hasMany(Course, {foreignKey: 'coachId', targetKey: 'coachId'});
Course.belongsTo(Coach);

User.belongsToMany(Dating, {through: 'userDating', foreignKey: 'userId'});
Dating.belongsToMany(User, {through: 'userDating', foreignKey: 'datingId'});

sequelize.sync();

exports.User = User;
exports.Course = Course;
exports.Dating = Dating;
exports.Coach = Coach;
exports.Company = Company;
exports.News = News;
exports.Bike = Bike;
exports.Admin = Admin;
