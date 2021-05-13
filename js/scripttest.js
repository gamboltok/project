let num = 1;

// (num == 50) ? console.log("ok") : console.log("No");

switch(num){
    case 49:
        console.log("неверно");
        break;
    case 100:
        console.log("Неверно");
        break;
    case 150:
        console.log("good");
        break;  
    default:
        console.log("oops");
        break;      
}





for(let i = 0; i < 10; i++){
   if (i == 3){
        continue;
   }
    console.log(i);
}