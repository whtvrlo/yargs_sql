const { Sequelize } = require("sequelize");
const { Movie } = require("../models/models");

const addMovie = async (movieObj) => {
    try {
        console.log("add movie index hit")
        const movie = await Movie.create(movieObj)
        console.log("addMovie index finished")
        console.log(`We added ${movie.title}.`);

    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    addMovie
}