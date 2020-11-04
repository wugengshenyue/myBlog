const { Blog } = require("../models/index.js");

module.exports = async function () {
    let data = await Blog.findAll({ attributes: ["title"], order: [['pageviews', 'DESC']], offset: 0, limit: 10 });
    if (data) {
        return JSON.parse(JSON.stringify(data));
    } else {
        return data;
    }
}