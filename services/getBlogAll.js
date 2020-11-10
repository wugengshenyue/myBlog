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
        attributes: ["id", "title", "contentText", "tagAll", "pageviews", "createdAt"],
        order: [['createdAt', 'DESC']],
        offset: (page - 1) * size, limit: size,
        where
    });

    if (data) {
        data = JSON.parse(JSON.stringify(data));

        data.rows = data.rows.filter((ele) => {

            if (ele.id > 0) {
                return true;
            } else {
                return false;
            }
        })

        
        data.count = data.count - 2;
        data.rows = data.rows.map((ele) => {
            // ele.target = ele.target === null ? "" : ele.target;
            return {
                id: ele.id,
                title: ele.title,
                content: ele.contentText,
                tags: ele.tagAll,
                pageviews: ele.pageviews,
                time: new Date(ele.createdAt).getTime()
            }
        })


        return data;
    } else {
        return data;
    }

}