"use strict";

// let numberOfFilms;

const personaMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
      start: function(){
        personaMovieDb.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        let userAnswerBlock = document.createElement('div'),
            heading = document.createElement('h2');
      
              userAnswerBlock.classList.add('block'); //create class block
              heading.classList.add('message');       //create class message
      
                heading.textContent = personaMovieDb.count;
                document.body.appendChild(userAnswerBlock);
                userAnswerBlock.appendChild(heading);
      
                  while(personaMovieDb.count == "" || personaMovieDb.count == null || isNaN(personaMovieDb.count)){
                    personaMovieDb.count = prompt("Сколько фильмов вы уже посмотрели?", "");
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
      writeYourGenres: function(){
        let arr = [];
        for(let i = 0; i < 3; i++){
          let question = prompt(`Ваш любимый жанр №${i+1}?`, "");
            if(question == "" || question == null){
              console.log("заполните правильно");
              i--;
              let question = prompt(`Ваш любимый жанр №${i+1}?`, "");
            }else{
              personaMovieDb.genres[i] = question;
            }
        }
        personaMovieDb.genres.forEach((value, i) => {
          console.log(`Жанр №${i+1}: ${value}`);
        });
      },
      toggleVisibleMyDb: function(){
        if(personaMovieDb.privat == false){
          personaMovieDb.privat = true;
        }else{
          personaMovieDb.privat = false;
        }
      }

};

personaMovieDb.start();
personaMovieDb.rememberFilm();
personaMovieDb.toggleVisibleMyDb();
personaMovieDb.showMyDb(personaMovieDb.privat);
personaMovieDb.writeYourGenres();
