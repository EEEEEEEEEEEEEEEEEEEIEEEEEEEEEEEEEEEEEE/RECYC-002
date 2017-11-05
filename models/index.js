var sequelize = require('../config/sequelize').sequelize();
var User = sequelize.import('./user');
var Admin = sequelize.import('./admin');
var Course = sequelize.import('./course');
var Dating = sequelize.import('./dating');
var Coach = sequelize.import('./coach');
var Company = sequelize.import('./company');
var News = sequelize.import('./news');
var Bike = sequelize.import('./bike');
var Record = sequelize.import('./record');
var Turnover = sequelize.import('./turnover');

Course.hasMany(Dating, {foreignKey: 'course_id', targetKey: 'courseId'});
Dating.belongsTo(Course);

Coach.hasMany(Dating, {foreignKey: 'coach_id', targetKey: 'coachId'});
Dating.belongsTo(Coach);

Coach.hasMany(Course, {foreignKey: 'coach_id', targetKey: 'coachId'});
Course.belongsTo(Coach);

User.hasMany(Record, {foreignKey: 'user_id', targetKey: 'userId'});
Record.belongsTo(User);

Coach.hasMany(Record, {foreignKey: 'coach_id', targetKey: 'coachId'});
Record.belongsTo(Coach);

Dating.hasMany(Record, {foreignKey: 'dating_id', targetKey: 'datingId'});
Record.belongsTo(Dating);

Course.hasMany(Record, {foreignKey: 'course_id', targetKey: 'courseId'});
Record.belongsTo(Course);

User.hasMany(Turnover, {foreignKey: 'user_id', targetKey: 'userId'});
Turnover.belongsTo(User);

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
exports.Record = Record;
exports.Turnover = Turnover;
