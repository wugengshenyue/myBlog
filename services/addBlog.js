const { Blog, Tag } = require("../models/index.js");

module.exports = async function (title, contentHtml, contentText, tags) {
    let tagArr = tags.split(",");

    let blog = await Blog.create({ title, contentHtml, contentText, pageviews: 0, tagAll: tags })

    tagArr.forEach(async ele => {
        let tag = await Tag.findOne({ where: { name: ele } });
        if (tag) {
            tag.setBlogs(blog)
        } else {
            let tag = await Tag.create({ name: ele });
            tag.setBlogs(blog)
        }
    });

    if (blog) {
        return true;
    } else {
        return false;
    }

}