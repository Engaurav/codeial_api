const Post = require('../../../models/post');
const Comment = require('../../../models/comments');
const User = require('../../../models/user');
module.exports.index = async(req, res) => {


    let posts = await Post.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });
    return res.json(200, {
        message: "List of Posts",
        posts
    })
}