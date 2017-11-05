module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'user',
        {
            'user_id': {
                'type': DataTypes.INTEGER,
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
            'user_height': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_weight': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_weight_without_fat': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_fat': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_muscle': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_bone': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_protein': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_water': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_pbf': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_bmi': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_whr': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_visceral_fat': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_sbw': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_weight_control': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_basal_metabolism': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_control_fat': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_control_muscle': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_health_score': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'user_shape': {
                'type': DataTypes.INTEGER,
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
            'user_openid': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'last_measure_date': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'last_measure_time': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            }
        }
    );
}
