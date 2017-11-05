module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'dating',
        {
            'dating_id': {
                'type': DataTypes.INTEGER,
                'allowNull': true
            },
            'dating_title_img': {
                'type': DataTypes.STRING(125),
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
            'dating_degree': {
                'type': DataTypes.INTEGER,
                'allowNull': true
            },
            'dating_valid': {
                'type': DataTypes.STRING(125),
                'allowNull': true
            },
            'dating_date': {
                'type': DataTypes.STRING(125),
                'allowNull': true
            },
            'dating_time': {
                'type': DataTypes.STRING(125),
                'allowNull': true
            },
            'dating_place': {
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
            },
            'finished': {
                'type': DataTypes.BOOLEAN,
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
