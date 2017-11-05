module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'record',
        {
            'user_id': {
                'type': DataTypes.INTEGER,
                'allowNull': false
            },
            'date': {
                'type': DataTypes.INTEGER,
                'allowNull': true
            },
            'user_in': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'user_out': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            }
        }
    );
}
