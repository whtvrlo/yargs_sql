const { DataTypes } = require("sequelize");
const { connection } = require("../db/connection");
const {setApproval } = require("./modelHelpers")

const Movie = connection.define("Movies", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    approval: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        set(value) {
            this.setDataValue('approval', setApproval(value));
            this.setDataValue('rating', value);
        }
    }
});

module.exports = {
    Movie
}
