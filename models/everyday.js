const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("everyday", {
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    freezeTableName:true,
    createdAt: true,
    updatedAt: true,
    paranoid: true,
})