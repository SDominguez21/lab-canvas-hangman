// let hangManGame; 
// * let theCanvasArtist; IF YOU WANT TO HIDE THE SECRET WORD FROM PEOPLE YOU NEED TO HIDE THE VARIABLES 
// if i dont put all the functions inside the class 

class Hangman {
  constructor() {
    this.words = ["Bruce", "Lee", "Willis", "Spingfield"];
    this.secretWord;
    this.letters = []; //we cn just make two properties, correct and wrong, indtead of one that holds both
    this.guessedLetter = '';
    this.errorsLeft = 10; //we made 5
    this.wordArr = [];
    // this.chances = 10
    // * theCanvasArtist = new HangManCanvas(this.getWord())

  // you can either put all these functions inside the class or leave them out and write 
  // Hangman.prototype. before 
  getWord() {
    let randomWord = Math.floor(Math.random() * this.words.length);
    this.words[randomWord];
    return this.words[randomWord];
  }
// will be executed when you press start 
  checkIfLetter(keyCode) {
    if(typeof(keyCode) === "string") {
      console.log("true");
      return true;
    } else {
      console.log("wrong");
    }
    // if(theNumber >= 65 && theNUmber <= 90){
      // return true;
  // }
  // return false;

    }
  
// will be executed when you press start 
// should be called evaluateLetter---will check if it's been guessed and if it's correct 
  checkClickedLetters(key) {
   for(let i = 0; i < this.letters.length; i++) 
   console.log("clicked"); 
   if (key === this.letters[i]) {
      return true
    } else {
     return false
   }
  }

  guessedLetter(i) {
    console.log("word before functinon", this.wordArr)
    let result = this.wordArr.filter(letter => letter !== i);
    console.log(result)
    console.log(wordArr)
    if(result.length !== this.wordArr.length){
      console.log("correct!")
    } else {
      console.log("wrong!")
    }
  }

  addCorrectLetter(i) {
    for(let i= 0; i < this.secretWord.length; i++)
    if(this.guessedLetter(i) === 
    push(i));
  }

  addWrongLetter(letter) {
    // this.errorsLeft -1 
    // check if game is over
  }

  checkGameOver() {
    // return true if the user looses 
    // return false if any other case 
  }
  checkWinner() {
    // return true if winner
  }

} //end

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  canv = new HangmanCanvas();
  canv.drawLines();

};
// document.onkeydown = function (e) {
//   //e.keycode 65 90 

// if(hangman.checkIfLetter(e.keyCode){
//   hangManGame.evaluateLetter(e.key)
// }

// PARTNER AND ME CODE BELOW 

// class Hangman{
//   constructor(){
//     this.words =["Bruce","Leee","Bruce","Willis", "Bruce", "Springsteen"];
//     this.secretWord;
//     this.letter =[];
//     this.guessedLetter =[];
//     this.errorsLeft = 5;
//     this.correctWords=[];

//   }

// getWord () {

//  let randomWord = Math.floor(Math.random()*this.words.length);
//  this.words[randomWord];
//  this.secretWord = this.words[randomWord];

 
// }

// checkIfLetter (keyCode) {
// //console.log("CkLetter");

// if(typeof(keyCode)==="string"){
  
// this.addCorrectLetter(keyCode);

// }else {
//   console.log("Your need to enter a letter fool");
// }
//  }

//  //Check cicked Letters FIRST
// checkClickedLetters (key) {

// let alreadyInThere = false;

// for (let i = 0; i < this.letter.length; i++){
//   if (key === this.letter[i]){
    
//     console.log("wrong");

//     alreadyInThere = true;

//   }
// }

//   if(alreadyInThere===false){
//     console.log("about to check if letter")
//     this.checkIfLetter(key);
//   }
  

// }

// addCorrectLetter(key) {
// console.log("addLetter");
//   this.letter.push(key);

//   let secret = this.secretWord.split("");

//   for(let i=0; i < secret.length; i++ ){
//     if (secret[i] === key){
//       this.correctWords.push(key);
//     }else{
//       this.addWrongLetter(key);
//     }
//   }
 
//  this.guessedLetter.push(key);
//  }

// addWrongLetter(key){
//   this.checkWinner();
//   this.errorsLeft-=1;

// if (this.errorsLeft==0){

//     this.checkGameOver();

//   }
//  }

// checkGameOver () {

//   alert("Game Over");

//  }

// checkWinner() {

// if(this.secretWord.length === this.guessedLetter.length){
//   alert("You Won");
// }
// }
// }

// document.getElementById('start-game-button').onclick = function () {
//   hangman = new Hangman();
//   hangman.getWord();
// };

// document.onkeydown = function (e) {
//   //e.keycode 64 90 

// if(e.value.keyCode >=64 || e.value.keyCode <=90){
// hangman.checkClickedLetters(e.value);
// }else{
//   console.log("Incorrect");
// }
// };
