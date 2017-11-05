module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'record',
        {
            'user_id': {
                'type': DataTypes.INTEGER,
                'allowNull': false
            },
            'coach_id': {
                'type': DataTypes.INTEGER,
                'allowNull': false
            },
            'dating_id': {
                'type': DataTypes.INTEGER,
                'allowNull': false
            },
            'course_id': {
                'type': DataTypes.INTEGER,
                'allowNull': false
            },
            'dating_time': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'course_name': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'dating_rating': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'dating_date': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'dating_start': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'dating_end': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            }
        },
        {
            indexes: [
                {
                    name: 'user_id',
                    method: 'BTREE',
                    fields: ['userId']
                },
                {
                    name: 'coach_id',
                    method: 'BTREE',
                    fields: ['coachId']
                },
                {
                    name: 'course_id',
                    method: 'BTREE',
                    fields: ['courseId']
                },
                {
                    name: 'dating_id',
                    method: 'BTREE',
                    fields: ['datingId']
                }
            ]
        }
    );
}
