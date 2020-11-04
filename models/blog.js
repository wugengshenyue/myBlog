const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("blog", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Tags: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pageviews: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    createdAt: true,
    updatedAt: true,
    paranoid: true,
})
