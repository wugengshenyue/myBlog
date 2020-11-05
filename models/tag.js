const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("tag", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName:true,
    createdAt: true,
    updatedAt: true,
    paranoid: true,
})

