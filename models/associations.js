const Blog = require("./blog.js");
const Tag = require("./tag.js");
const Comment = require("./comment.js");

Tag.belongsToMany(Blog, { through: "blog_tag" });
Blog.belongsToMany(Tag, { through: "blog_tag" });


Blog.hasMany(Comment);
Comment.belongsTo(Blog);



