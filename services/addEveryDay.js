const { EveryDay } = require("../models/index.js");


module.exports = async function (content) {
    try {
        await EveryDay.create({ content });
        return { msg: "发布每日一句成功" }
    } catch (err) {
        return { msg: "发布每日一句失败" }
    }
}