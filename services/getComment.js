const { Comment } = require("../models/index.js");

module.exports = async function (blogId) {
    let data = await Comment.findAll({
        attributes: ["name", "content", "createdAt"],
        order: [['createdAt', 'DESC']],
        where: {
            blogId
        }
    });
    if (data) {
        data = JSON.parse(JSON.stringify(data));
        return data.map((ele) => {
            // ele.target = ele.target === null ? "" : ele.target;
            return {
                name: ele.name,
                content: ele.content,
                time: new Date(ele.createdAt).getTime()
            }
        })
    } else {
        return [];
    }
}