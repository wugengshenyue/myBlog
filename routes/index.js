const express = require("express");
const cors = require("cors");
const session = require('express-session')
const blog = require("./api/blog.js");
const comment = require("./api/comment.js");
const tag = require("./api/tag.js");
const everDay = require("./api/everyDay.js");
const about = require("./api/about.js");
const guestbook = require("./api/guestbook.js");


const captcha = require("./captcha.js");

let app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true }));

app.use(session({ secret: "ming" }));

app.use("/api", blog, comment, tag, everDay, about, guestbook);

app.get("/captcha", captcha);

app.listen(8081);