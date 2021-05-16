"use strict";

let numberOfFilms;

function start(){
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  let userAnswerBlock = document.createElement('div'),
      heading = document.createElement('h2');

        userAnswerBlock.classList.add('block'); //create class block
        heading.classList.add('message');       //create class message

          heading.textContent = numberOfFilms;
          document.body.appendChild(userAnswerBlock);
          userAnswerBlock.appendChild(heading);

            while(numberOfFilms == "" ||numberOfFilms == null || isNaN(numberOfFilms)){
              numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
            }
}

start();

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

        if (lastFilm1 != null && ratingFilm != null && lastFilm1.length < 50 && lastFilm1 != "" ){
          personaMovieDb.movies[lastFilm1] = ratingFilm;
        }else{
          console.log("Ошибка: заполните всё правильно");
          i--;
        }
      }

function showMyDb(status){
  if(!status){
    console.log(personaMovieDb);
  }else{
    console.log("personaMovieDb приватная");
  }
}

function whiteYourGenres(){
  let arr = [];
    for(let i = 0; i < 3; i++){
      let question = prompt("Ваш любимый жанр?", "");
      personaMovieDb.genres[i] = question;
    }
}

showMyDb(personaMovieDb.privat);
whiteYourGenres();