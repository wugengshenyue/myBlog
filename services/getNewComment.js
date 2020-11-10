const { Comment } = require("../models/index.js");

module.exports = async function (size) {
    let data = await Comment.findAll({ attributes: ["id", "name", "content", "blogId", "createdAt"], order: [['createdAt', 'DESC']], offset: 0, limit: size });
    if (data) {
        data = JSON.parse(JSON.stringify(data))
        return data.map((ele) => {
            return {
                id: ele.id,
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