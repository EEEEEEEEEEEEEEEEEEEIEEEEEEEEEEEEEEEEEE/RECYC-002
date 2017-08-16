module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'dating',
        {
            'courseId': {
                'type': DataTypes.INTEGER,
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
            'dating_id': {
                'type': DataTypes.INTEGER,
                'allowNull': true
            },
            'dating_rating': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'dating_users': {
                'type': DataTypes.TEXT,
                'allowNull': true
            },
            'dating_time': {
                'type': DataTypes.STRING(125),
                'allowNull': true
            },
            'dating_capacity': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'dating_register': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            }
        },
        {
            indexes: [
                {
                    name: 'course_id',
                    method: 'BTREE',
                    fields: ['courseId']
                }
            ]
        }
    );
}
