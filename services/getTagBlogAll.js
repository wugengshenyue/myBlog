const { Blog, Tag } = require("../models/index.js");

module.exports = async function (tag, page, size) {
    let data = await Tag.findAll({
        include: [{
            model: Blog,
            attributes: ["id", "title", "contentText", "pageviews", "createdAt", "tagAll"],
        }],
        attributes: [],
        where: { name: tag }
    });

 

    if (data.length) {

        [{ blogs: data }] = data;

        let temp = ((page - 1) * size);

        let newData = data.map(ele => {
            return {
                id: ele.id,
                title: ele.title,
                content: ele.contentText,
                pageviews: ele.pageviews,
                tags: ele.tagAll,
                time: new Date(ele.createdAt).getTime()
            }
        })

        newData.sort((ele1, ele2) => {
            return ele2.time - ele1.time;
        })


        newData = newData.slice(temp === 0 ? temp : temp - 1, temp + size);



        return {
            count: data.length,
            rows: newData
        }

    } else {
        return {
            count: 0,
            rows: []
        };
    }

}


