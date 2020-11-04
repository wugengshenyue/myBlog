const { Comment } = require("../models/index.js");

module.exports = async function () {
    let data = await Comment.findAll({ attributes: ["name", "content", "blogId", "createdAt"], order: [['createdAt', 'DESC']], offset: 0, limit: 6 });
    if (data) {
        data = JSON.parse(JSON.stringify(data))
        return data.map((ele) => {
            return {
                name: ele.name,
                content: ele.content,
                blogId: ele.blogId,
                time: new Date(ele.createdAt).getTime()
            }
        })

    } else {
        return data;
    }
}