module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'turnover',
        {
            'userId': {
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
        },
        {
            indexes: [
                {
                    name: 'user_id',
                    method: 'BTREE',
                    fields: ['userId']
                }
            ]
        }
    );
}
