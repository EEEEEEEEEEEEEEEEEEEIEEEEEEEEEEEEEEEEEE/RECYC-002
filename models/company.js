module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'company',
        {
            'company_name': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'company_picture': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'company_place': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'company_connect': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'latitude': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'longitude': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            }
        }
    );
}
