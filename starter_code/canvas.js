// $(document).ready(function() {
$(document).keydown(function(e) {
  console.log(e);
});

class HangmanCanvas { //extends Hangman 
  constructor(secretWord) {
    // super(secretWords);
    this.ctx = document.getElementById("hangman").getContext("2d");
    // this.secret = theWord
  }

  drawLines() { 
     // one letter line
     this.ctx.beginPath();
     // ctx.lineWidth = 3;

     let x = 300;
     let y = 700;

     this.secret.split('').forEach((eachLeter)=>{
       
       this.ctx.moveTo(200, 800);
       this.ctx.lineTo(250, 800);
       this.ctx.stroke();

       x += 75;
     })




    // switch statement with coordinates of the hangman and gallow 
    console.log("drawLines");
  //  long horizontal line
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(100, 100);
    this.ctx.lineTo(500, 100);
    this.ctx.stroke();

    // small vertical line 
    this.ctx.beginPath();

    // ctx.lineWidth = 3;
    this.ctx.moveTo(500, 100);
    this.ctx.lineTo(500, 170);
    this.ctx.stroke();

    // long vertical line 
    this.ctx.beginPath();

    // ctx.lineWidth = 3;
    this.ctx.moveTo(100, 100);
    this.ctx.lineTo(100, 750);
    this.ctx.stroke();

    // triangle base 
    this.ctx.beginPath();

    // ctx.lineWidth = 3;
    this.ctx.moveTo(100, 750);
    this.ctx.lineTo(40, 800);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(40, 800)
    this.ctx.lineTo(160, 800);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(160, 800);
    this.ctx.lineTo(100, 750);
    this.ctx.stroke();

    // man's head
    this.ctx.beginPath();
    // ctx.lineWidth = 3;
    this.ctx.arc(500, 220, 50, 0, 2 * Math.PI);
    this.ctx.stroke();

    // body
    this.ctx.beginPath();
    // ctx.lineWidth = 3;
    this.ctx.moveTo(500, 270);
    this.ctx.lineTo(500, 500);
    this.ctx.stroke();

    // left legs
    this.ctx.beginPath();
    // ctx.lineWidth = 3;
    this.ctx.moveTo(500, 500);
    this.ctx.lineTo(400, 600);
    this.ctx.stroke();

    // right leg
    this.ctx.beginPath();
    // ctx.lineWidth = 3;
    this.ctx.moveTo(500, 500);
    this.ctx.lineTo(600, 600);
    this.ctx.stroke();

    // one letter line
    this.ctx.beginPath();
    // ctx.lineWidth = 3;
    this.ctx.moveTo(200, 800);
    this.ctx.lineTo(250, 800);
    this.ctx.stroke();
   
  }

  writeCorrectLetter(index) {}

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {}

  gameOver() {}

  winner = function() {};
}

// }); //end


// inside tHE writeCorrectLetters function
// arrayOfLettersd.forEach((eachLetter)=>{
  
//   let x = 305;
//   let y = 580;

//  this.ctx.font = '48px Comic Sans MS';
//  this.ctx.fillText(eachLetter, 300, 750)
//  this.ctx.fillText(eachLeter, x + (75*ind), y)
// })