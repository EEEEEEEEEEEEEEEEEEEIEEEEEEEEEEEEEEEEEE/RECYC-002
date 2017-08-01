module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'course',
        {
            'course_id': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'course_name': {
                'type': DataTypes.STRING(125),
                'allowNull': false
            },
            'course_content': {
                'type': DataTypes.TEXT,
                'allowNull': true
            },
            'course_teacher': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'course_capacity': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'course_register': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
        }
    );
}
