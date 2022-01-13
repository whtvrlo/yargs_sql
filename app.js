require("dotenv").config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const commandLineInput = yargs(hideBin(process.argv)).argv;

const { Movie } = require("./models/models");
console.log(Movie);


const { connection } = require("./db/connection");
const { addMovie } = require("./utils/index")

const app = async(commandLineInput) => {

    try {
        await connection.authenticate();
    } catch (err) {
        console.log(err)
    }


    try {
        if (commandLineInput.add) {
            await Movie.sync({alter: true});
            console.log("addMovie hit")
            await addMovie({title: commandLineInput.title,
            actor: commandLineInput.actor,
            rating: commandLineInput.rating
        });
        }
        connection.close();
        process.exit();
    } catch(err) {
        console.log(err)
    }
}

app(commandLineInput);




// const app = (commandLineInput) => {
//     if (commandLineInput.add) {
//             if (commandLineInput.movie) { 
//                 console.log(`We re adding ${commandLineInput.title} with the actor ${commandLineInput.actor}`)
//             } else if (commandLineInput.album) {
//                 console.log("we are adding to Albums");
//             }
//     } else if (commandLineInput.list) {
//         console.log("We have list");
//     }

// }


// app(commandLineInput);

