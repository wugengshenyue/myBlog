const { Blog } = require("../models/index.js");
const getComment = require("./getComment");


module.exports = async function (blogId) {
    let data = await Blog.findByPk(blogId, { attributes: ["title", "content", "tags", "pageviews", "createdAt"] });
    if (data) {
        data = data.toJSON()
        let comment = await getComment(blogId);
        return {
            title: data.title,
            content: data.content,
            tags: data.tags,
            pageviews: data.pageviews,
            time: new Date(data.createdAt).getTime(),
            comment
        }
    } else {
        return {};
    }
}