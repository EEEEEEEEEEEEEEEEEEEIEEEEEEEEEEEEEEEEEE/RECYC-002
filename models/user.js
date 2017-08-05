module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'user',
        {
            'user_id': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'user_account': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'user_password': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'user_name': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'user_face': {
                'type': DataTypes.STRING(125),
                'allowNull': false
            },
            'user_sex': {
                'type': DataTypes.INTEGER,
                'allowNull': true
            },
            'user_age': {
                'type': DataTypes.INTEGER,
                'allowNull': true
            },
            'user_weight': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_fat': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_connect': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'user_wechat': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'user_learn_time': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'user_rating': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'user_note': {
                'type': DataTypes.TEXT,
                'allowNull': true
            },
            'user_register': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
        }
    );
}
