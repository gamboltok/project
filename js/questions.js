"use strict";
//Создать переменную  numberOfFilms и поместить туда ответ от пользователя на вопрос "сколько фильмов вы уже посмотрели?"

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

// document.write(numberOfFilms);

let userAnswerBlock = document.createElement('div'),
    heading = document.createElement('h2');

userAnswerBlock.classList.add('block'); //create class block
heading.classList.add('message');       //create class message
heading.textContent = numberOfFilms;
document.body.appendChild(userAnswerBlock);
userAnswerBlock.appendChild(heading);