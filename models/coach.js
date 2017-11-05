module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'coach',
        {
            'coachId': {
                'type': DataTypes.INTEGER,
                'allowNull': false
            },
            'companyId': {
                'type': DataTypes.INTEGER,
                'allowNull': false
            },
            'coach_account': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'coach_password': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'coach_name': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'coach_face': {
                'type': DataTypes.STRING(125),
                'allowNull': true
            },
            'coach_card_picture': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'coach_work': {
                'type': DataTypes.STRING(125),
                'allowNull': true
            },
            'coach_place': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'coach_work_time': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'coach_sign': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'coach_sex': {
                'type': DataTypes.INTEGER,
                'allowNull': true
            },
            'coach_age': {
                'type': DataTypes.INTEGER,
                'allowNull': true
            },
            'coach_ranking': {
                'type': DataTypes.INTEGER,
                'allowNull': true
            },
            'coach_ranking_switch': {
                'type': DataTypes.BOOLEAN,
                'allowNull': true
            },
            'coach_connect': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'coach_wechat': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'coach_openid': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            }
        },
        {
            indexes: [
                {
                    name: 'company_id',
                    method: 'BTREE',
                    fields: ['companyId']
                }
            ]
        }
    );
}
