require("./associations.js")
const sequelize = require("./db.js");
const Blog = require("./blog.js");
const Tag = require("./tag.js");
const Comment = require("./comment.js");
const EveryDay = require("./everyday.js");


sequelize.sync({ alter: true })

module.exports = {
    Blog,
    Tag,
    Comment,
    EveryDay
}

