"use strict";


function alert2(message){
 let modal = document.createElement('div'),
     textArea = document.createElement('p');
        modal.classList.add('modal');
        textArea.classList.add('textarea');
    
     document.body.appendChild(modal);
     modal.appendChild(textArea);
     return (textArea.textContent = message);
}

let book = {
    secretPage: {}
};

function createNote(){
    for(let i = 0; i < 1; i++){
        let note = prompt("Как прошёл день?", "");
            if(note != null && note.length < 50 && note != ""){
                book.secretPage = note;
            }else{
                // i--;
                alert2("Поля не заполнены или больше 50 символов");
            }
    }
}

createNote();
console.log(book.secretPage);

