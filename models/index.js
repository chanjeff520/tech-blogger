const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment')

//user association with blog
User.hasMany(Blog, {
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

//blog association with comment
Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
});

//user association with comment 
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id'
});

module.exports = {User, Blog, Comment}