const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("comment", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    target: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: true,
    updatedAt: true,
    paranoid: true,
})

