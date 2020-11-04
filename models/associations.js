const Blog = require("./blog.js");
const Tag = require("./tag.js");
const Comment = require("./comment.js");

Blog.belongsToMany(Tag, { through: 'blog_tag' });

Comment.belongsTo(Blog);



