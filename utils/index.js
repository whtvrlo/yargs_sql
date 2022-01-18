const { Sequelize, Op } = require("sequelize");
const { Movie } = require("../models/models");


const addMovie = async (movieObj) => {
    try {
        const movie = await Movie.create(movieObj)
        console.log(`${movie.title} has been added.`);

    } catch (err) {
        console.log(err)
    }
}

// DELETE ALL MOVIES
const deleteAllMovies = async (movieObj) => {
    try {
        const movie = await Movie.destroy(movieObj)
        console.log(`HIT We deleted ${movie.title}.`); 
    } catch (error) {
        console.log(error);
    }
}

// DESTROY SINGLE INSTANCE FUNCTION
const deleteMovie = async (title) =>{
    try {
        const movie = await Movie.findOne({ where: title });
        await movie.destroy();
        console.log(`${movie.title} has been succesfully deleted.`);
        console.log(`Updated list of movies:`);
        await listMovies();
        
    } catch (error) {
        console.log(error)
        
    }
}

// LIST MOVIES
const listMovies = async () => {
    try {
        const movies = await Movie.findAll({});
        console.log(movies.every(user => user instanceof Movie));
        console.log("All Movies", JSON.stringify(movies, null, 2)); // converts javascript object to a JSON string. param: value, replacer, space. If value is null or not provided, all props of object are included in JSON string.
    } catch (error) {
        console.log(error)
    }
}

// // UPDATE MOVIE ;
const updateMovie = async (movieTitle) => {
    try {
    await Movie.update(
        {title: movieTitle.updatedTitle},
        {where: {title: movieTitle.currentTitle} }
        );  
    } catch (error) {
        console.log(error)
        
    }
}



module.exports = {
    addMovie,
    listMovies,
    deleteAllMovies,
    deleteMovie,
    updateMovie,
}