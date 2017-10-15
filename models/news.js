module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'news',
        {
            'news_title': {
                'type': DataTypes.STRING(45),
                'allowNull': false
            },
            'news_subtitle': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'news_like': {
                'type': DataTypes.DOUBLE,
                'allowNull': true
            },
            'news_title_img': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'news_picture': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'news_time': {
                'type': DataTypes.STRING(45),
                'allowNull': true
            },
            'news_content': {
                'type': DataTypes.TEXT,
                'allowNull': false
            }
        }
    );
}
