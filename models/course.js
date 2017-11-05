module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'course',
        {
            'course_id': {
                'type': DataTypes.INTEGER,
                'allowNull': false
            },
            'coachId': {
                'type': DataTypes.INTEGER,
                'allowNull': false
            },
            'course_name': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'course_type': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'course_price': {
                'type': DataTypes.INTEGER,
                'allowNull': false
            },
            'course_title_img': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'course_content': {
                'type': DataTypes.TEXT,
                'allowNull': true
            },
            'coach_name': {
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
            }
        },
        {
            indexes: [
                {
                    name: 'coach_id',
                    method: 'BTREE',
                    fields: ['coachId']
                }
            ]
        }
    );
}
