const { About } = require("../models/index.js");


module.exports = async function (content) {
    try {
        await About.create({ content });
        return { msg: "发布成功" }
    } catch (err) {
        return { msg: "发布失败" }
    }
}