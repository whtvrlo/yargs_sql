const { Sequelize, Op } = require("sequelize");
const { Movie } = require("../models/models");


const addMovie = async (movieObj) => {
    try {
        const movie = await Movie.create(movieObj)
        console.log(`We added ${movie.title}.`);

    } catch (err) {
        console.log(err)
    }
}

// DESTROY SINGLE INSTANCE FUNCTION
const deleteMovie = async (title, actor, rating) =>{
    try {
        const movie = await Movie.findOne({where: title, actor, rating});
        await movie.destroy();
        console.log(`${movie.title} has been succesfully deleted.`);
        listMovies();
        
    } catch (error) {
        console.log(error)
        
    }
}

// DELETEALLMOVIES
const deleteAllMovies = async (movieObj) => {
    try {
        const movie = await Movie.destroy(movieObj)
        console.log(`HIT We deleted ${movie.title}.`); 
    } catch (error) {
        console.log(error);
    }
}

// LIST MOVIES
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
    listMovies,
    deleteAllMovies,
    deleteMovie,
}