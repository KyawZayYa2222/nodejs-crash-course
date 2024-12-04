import getposts, {getpostsLength} from "./postController.js";

// console.log("hello world!");
// console.log(process)
// const {generateRandom, celciusToFahrenheit} = require("./utils")

// console.log(`random number = ${generateRandom()}`)

// console.log(`celcius = 0 // fahrenheit = ${celciusToFahrenheit(0)}`)

console.log(getposts())

console.log(`posts length = ${getposts().length}`)