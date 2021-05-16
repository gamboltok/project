"use strict";

let numberOfFilms;

const personaMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
      start: function(){
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
      },
      rememberFilm: function(){
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
      },
      showMyDb: function(status){
        if(!status){
          console.log(personaMovieDb);
        }else{
          console.log("personaMovieDb приватная");
        }
      },
      whiteYourGenres: function(){
        let arr = [];
        for(let i = 0; i < 3; i++){
          let question = prompt(`Ваш любимый жанр №${i+1}?`, "");
          personaMovieDb.genres[i] = question;
        }
      }

};

personaMovieDb.start();
personaMovieDb.rememberFilm();
personaMovieDb.showMyDb(personaMovieDb.privat);
personaMovieDb.whiteYourGenres();
