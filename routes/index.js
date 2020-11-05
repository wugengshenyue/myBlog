const express = require("express");
const blog = require("./api/blog.js");



let app = express();

app.use("/api", blog);


app.listen(8080);