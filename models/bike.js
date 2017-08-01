module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'bike',
        {
            'bike_id': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'bike_type': {
                'type': DataTypes.INTEGER,
                'allowNull': false
            },
            'bike_position': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'bike_used': {
                'type': DataTypes.INTEGER,
                'allowNull': false
            },
            'bike_update': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'bike_register': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            }
        }
    );
}
