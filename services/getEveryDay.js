const { EveryDay } = require("../models/index.js");

module.exports = async function () {
    let data = await EveryDay.findOne({ attributes: ["content", "createdAt"], order: [['createdAt', 'DESC']] });
    if (data) {
        data = data.toJSON()
        return {
            content: data.content,
            time: new Date(data.createdAt).getTime(),
        }
    } else {
        return {};
    }
}