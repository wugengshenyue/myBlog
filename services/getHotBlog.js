const { Blog } = require("../models/index.js");

module.exports = async function (size) {
    let data = await Blog.findAll({ attributes: ["id", "title"], order: [['pageviews', 'DESC']], offset: 0, limit: size });
    if (data) {
        data = JSON.parse(JSON.stringify(data))

        data = data.filter((ele) => {
            if (ele.id > 0) {
                return true;
            } else {
                return false;
            }
        })


        return data;
    } else {
        return data;
    }
}