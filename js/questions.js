"use strict";
//Task 1

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", ""),
    userAnswerBlock = document.createElement('div'),
    heading = document.createElement('h2');

userAnswerBlock.classList.add('block'); //create class block
heading.classList.add('message');       //create class message
heading.textContent = numberOfFilms;
document.body.appendChild(userAnswerBlock);
userAnswerBlock.appendChild(heading);

//Task 2 & 3 combined
const personaMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

      for (let i = 0; i < 2; i++){
        const lastFilm1 = prompt('Один из последних просмотренных фильмов?', ''),
              ratingFilm = prompt('На сколько оцените его?', '');

        personaMovieDb.movies[lastFilm1] = i;
      }


console.log(personaMovieDb);
