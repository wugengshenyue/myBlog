const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("guestbook", {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    freezeTableName:true,
    createdAt: true,
    updatedAt: true,
    paranoid: true,
})