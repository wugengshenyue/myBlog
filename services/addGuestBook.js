const { GuestBook } = require("../models/index.js");


module.exports = async function (content) {
    try {
        await GuestBook.create({ content });
        return { msg: "发布成功" }
    } catch (err) {
        return { msg: "发布失败" }
    }
}