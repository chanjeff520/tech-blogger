const {model, DataTypes} = require('sequelize');

const sequelize = require('../config/conection');

class Comment extends model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.text,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            //allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        blog_id: {
            type: DataTypes.INTEGER,
            //allowNull: false,
            references: {
                model: 'blog',
                key:'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName:true,
        underscored:true,
        modelName: 'comment'
    }
);

module.exports = Comment;

