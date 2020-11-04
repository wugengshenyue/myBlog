const getEveryDay = require("./getEveryDay.js");
const getNewComment = require("./getNewComment.js");
const getHotBlog = require("./getHotBlog.js");


getHotBlog().then(function (data) {
    console.log(  data );
})
