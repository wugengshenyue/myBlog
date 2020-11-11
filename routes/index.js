const path = require("path");
const express = require("express");
const cors = require("cors");
const history = require('connect-history-api-fallback');
const session = require('express-session')
const blog = require("./api/blog.js");
const comment = require("./api/comment.js");
const tag = require("./api/tag.js");
const everDay = require("./api/everyDay.js");
const about = require("./api/about.js");
const guestbook = require("./api/guestbook.js");
const captcha = require("./captcha.js");
const staticRoot = path.resolve(__dirname, "../public")


let app = express();


app.use(session({ secret: "ming" }));

app.use(history({
    rewrites: [
        {
            from: /captcha+/,
            to: function (content) {
                return content.parsedUrl.path;
            }

        }
    ]
}))

app.use(express.static(staticRoot))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true }));



app.use("/api", blog, comment, tag, everDay, about, guestbook);

app.get("/captcha", captcha);

app.listen(8081);