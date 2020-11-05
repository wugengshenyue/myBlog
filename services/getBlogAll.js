const { Blog } = require("../models/index.js");
const { Op } = require("sequelize");

module.exports = async function (page, size, keyword) {
    let where = {};
    if (keyword) {
        where.title = {
            [Op.like]: `%${keyword}%`
        }
    }

    let data = await Blog.findAndCountAll({
        attributes: ["title", "content", "tags", "pageviews"],
        order: [['createdAt', 'DESC']],
        offset: (page - 1) * size, limit: size,
        where
    });

    if (data) {
        return JSON.parse(JSON.stringify(data));
    } else {
        return data;
    }

}