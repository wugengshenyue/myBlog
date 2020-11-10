const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("blog", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contentHtml: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    contentText: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tagAll: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pageviews: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName:true,
    createdAt: true,
    updatedAt: true,
    paranoid: true,
})
