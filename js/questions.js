"use strict";
//Task 1

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?"),
    userAnswerBlock = document.createElement('div'),
    heading = document.createElement('h2');

userAnswerBlock.classList.add('block'); //create class block
heading.classList.add('message');       //create class message
heading.textContent = numberOfFilms;
document.body.appendChild(userAnswerBlock);
userAnswerBlock.appendChild(heading);

//Task 2
let arr = []; //create empty array
const personaMovieDb = {
    count: numberOfFilms,
    movies: "",
    actors: "",
    genres: arr,
    privat: false
};
