const { Sequelize } = require("sequelize");
const { Movie } = require("../models/models");

const addMovie = async (movieObj) => {
    try {
        const movie = await Movie.create(movieObj)
        console.log(`We added ${movie.title}.`);

    } catch (err) {
        console.log(err)
    }
}

const listMovies = async () => {
    try {
        const movies = await Movie.findAll({});
        console.log(movies.every(user => user instanceof Movie));
        console.log("All Movies", JSON. stringify(movies, null, 2));
    } catch (error) {
        console.log(err)
    }
}

module.exports = {
    addMovie,
    listMovies
}