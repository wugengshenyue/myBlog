const sequelize = require("../models/db.js");
const { Tag } = require("../models/index.js");


module.exports = async function (size) {
    let data = await Tag.findAll({ attributes: ["id", "name"], order: sequelize.random(), offset: 0, limit: size });
    if (data) {
        return JSON.parse(JSON.stringify(data));
    } else {
        return data;
    }
}