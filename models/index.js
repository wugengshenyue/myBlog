const sequelize = require("./db.js");
const Blog = require("./blog.js");
const Tag = require("./tag.js");
const Comment = require("./comment.js");
const EveryDay = require("./everyday.js");
const About = require("./about.js");
const GuestBook = require("./guestbook.js");
require("./associations.js")

sequelize.sync({ alter: true })


module.exports = {
    Blog,
    Tag,
    Comment,
    EveryDay,
    About,
    GuestBook
}

