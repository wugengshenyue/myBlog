const { Sequelize } = require("sequelize");

module.exports = new Sequelize("myBlog", "root", "123", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});
