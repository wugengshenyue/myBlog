const { Blog, Comment } = require("../models/index.js");

module.exports = async function (blogId) {
    let data = await Blog.findByPk(blogId, {
        attributes: ["id", "title", "contentHtml", "tagAll", "pageviews", "createdAt"],
        include: [{ model: Comment, attributes: ["id", "name", "content", "createdAt"] }]
    });


    if (data) {
        data.pageviews = data.pageviews + 1;
        data.save()
        data = data.toJSON();
        let comments = data.comments.map(ele => {
            return {
                id: ele.id,
                name: ele.name,
                content: ele.content,
                time: new Date(ele.createdAt).getTime()
            }
        });


        comments.sort((ele1, ele2) => {
            return ele2.time - ele1.time;
        })

        let newData = {
            id: data.id,
            title: data.title,
            content: data.contentHtml,
            tags: data.tagAll,
            pageviews: data.pageviews,
            time: new Date(data.createdAt).getTime(),
            comments
        }

        return newData
    } else {
        return {};
    }








}


