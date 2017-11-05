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

Course.hasMany(Dating, {foreignKey: 'courseId', targetKey: 'courseId'});
Dating.belongsTo(Course);

Coach.hasMany(Dating, {foreignKey: 'coachId', targetKey: 'coachId'});
Dating.belongsTo(Coach);

Coach.hasMany(Course, {foreignKey: 'coachId', targetKey: 'coachId'});
Course.belongsTo(Coach);

Company.hasMany(Coach, {foreignKey: 'companyId', targetKey: 'companyId'});
Coach.belongsTo(Company);

User.hasMany(Turnover, {foreignKey: 'userId', targetKey: 'userId'});
Turnover.belongsTo(User);

User.hasMany(Record, {foreignKey: 'userId', targetKey: 'userId'});
Record.belongsTo(User);

Coach.hasMany(Record, {foreignKey: 'coachId', targetKey: 'coachId'});
Record.belongsTo(Coach);

Dating.hasMany(Record, {foreignKey: 'datingId', targetKey: 'datingId'});
Record.belongsTo(Dating);

Course.hasMany(Record, {foreignKey: 'courseId', targetKey: 'courseId'});
Record.belongsTo(Course);

User.hasMany(Turnover, {foreignKey: 'userId', targetKey: 'userId'});
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
