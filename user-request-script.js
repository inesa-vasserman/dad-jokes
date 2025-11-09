import {getData} from "./index.js";
import{getJokeByTerm} from "./search-request.js"


const $generateJokesButton = document.getElementById('jokes-generator');
const $searchSubmittion = document.getElementById('search-submittion');


function generateNewJokes(event) {
    event.preventDefault();
    getData();
}

$generateJokesButton.addEventListener('click', generateNewJokes)


$searchSubmittion.addEventListener('click',getJokeByTerm);

export {generateNewJokes} 