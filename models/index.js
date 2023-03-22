const User = require('./user')
const Comment = require('./comment')
const Post = require('./post')

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'Cascade',
})

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'Cascade',
})

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'Cascade',
})




module.exports = {User, Comment, Post}