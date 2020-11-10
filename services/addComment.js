const { Blog, Comment } = require("../models/index.js");


module.exports = async function (blogId, name, content) {
    let data = await Blog.findByPk(blogId);
    if (data) {
        try {
            await Comment.create({ name, content, blogId })
            return { msg: "评论成功" }
        } catch (err) {
            return { msg: "评论失败" }
        }
    } else {
        return { msg: "找不到指定博客ID" }
    }
}