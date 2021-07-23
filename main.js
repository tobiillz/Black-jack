// First Test Content
    // let value = document.getElementById('content');
    // let points = 3;

    // function add3points(){
    //   value.textContent = points +=3;
    // };

    // function remove1point(){
    //   value.textContent = points -= 1;
    // }


    // function error(){
    //   value.textContent = "Something went wrong, Please try again!"
    //   points = 0;
    // };

// Second test content

// let num1 = 8;
// let num2 = 2;
// document.getElementById('num1-el').textContent = num1;
// document.getElementById('num2-el').textContent = num2;


// function sum(){
//   let total = num1 + num2;
//   document.getElementById('sum-el').textContent = 'Sum:' + total;
// }
// function subtract(){
//   let total = num1 - num2;
//   document.getElementById('sum-el').textContent = 'Subtraction:' + total;
// }
// function divide(){
//   let total = num1 / num2
//   document.getElementById('sum-el').textContent ='Division:' +  total;
// }
// function multiply(){
//   let total = num1 * num2
//   document.getElementById('sum-el').textContent ='Multiplication:' +  total;
// }

// Third test- Black jack

// let firstCard = 1;
// let secondCard = 11;
// let sum = firstCard+secondCard;
// if (sum === 21){
//    console.log('You hit the jackpot!!');
// }else if (sum > 21){
//    console.log('You freaking lost your money');
// }else{
//    console.log('Close, Do you want to draw a new card?');
// }

// fourth test
// let age = 21;

// if (age >= 21){
//    console.log('You may enter!');
// }else{
//    console.log('Go back to your momma kiddo!!!')
// }

// Fifth challenge
// let age = 10;
// if (age > 100){
//    console.log('You have already gotten')
// }else if (age < 100){
//    console.log('You are not eligible')
// }else{
//    console.log('Here is your birthday card from the King')
// }



let firstCard = 1;
let secondCard = 11;
let sum = firstCard+secondCard;
let hasblackJack = false;
let isAlive = true;
let message = "";


let messageEl = document.getElementById('message-el');
let cardsEl = document.querySelector('#card-el');
let sumEl = document.querySelector('#sum-el'); 
function startGame(){
   renderGame();
}
function renderGame(){
      cardsEl.textContent = 'Cards: '+ firstCard + ',' + secondCard;
      sumEl.textContent = 'Sum: ' + sum;
   if (sum === 21){
      hasblackJack = true;
      message = 'You got Blackjack!!';
   }else if (sum > 21){
      message ="You're out of the game"
      isAlive = false;
   }else{
      message = "Do you want to draw a new card?"
   }
   messageEl.textContent = message;
   console.log(hasblackJack);
   console.log(isAlive);
   console.log(message)
}
function newCard(){
   console.log('Drawing a new card from the deck')
   let newcardValue = 4;
   cardsEl.textContent = cardsEl.textContent + 'test' + newcardValue;
   sum += newcardValue ;
   renderGame();
}
