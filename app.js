'use strict';

/*I use this to comment out all the Js while I test the rest of the site so I don't have to go through the questions while I do so*/
var userName = prompt('Welcome! What is your name? ');
alert(userName + ', you have stumbled upon a game wherein you will be answering some questions about me. Here are some guidelines:\n\n Punctuation doesn\'t matter, but spelling does! Please stick to yes/y or no/n for yes or no questions; otherwise, I will have to chide you! At the end of the game, I will tell you how well you did. Good luck!');
var defaultWrongResponse = 'I did not recognize your response. Please try again.';
var defaultCorrect = 'That is correct. ';
var defaultIncorrect = 'That is incorrect. ';
var totalCorrect = 0;
var prompt6; //question 6 info
var response6;
var question6responses = [];
var favNumber;
var prompt7; //question 7 info
var response7;
var question7responses = [];


//QnAnRarray is a 5 x 7 array to store each of the five questions, two correct answer options,
//two incorrect answer options, the feedback the user gets after answering a question, and the
//user's respose (the valid one only in case multiple attempts are needed), in that order

var QnAnRarray = [['Was Yana born in the United States?', 'n', 'no', 'y', 'yes', ' Yana was born in Bulgaria.', ''],
['Does Yana have any cats?', 'n', 'no', 'y', 'yes', ' Yana used to have three cats, but they\'re all dead.',''],
['Is Yana\'s favorite color black?', 'y', 'yes', 'n', 'no', ' Yana\'s favorite color is black, and she doesn\'t care that black is not technically a single color.',''],
['Is Yana 42 years old?', 'n', 'no', 'y', 'yes', ' Yana is 37 years old.',''],
['Did Yana want to be President of the US when she was younger?', 'y', 'yes', 'n', 'no', ' Yana did want to be President, but fortunately she became wiser as she got older.']];

function questionsOneThroughFive() {
  for (var count = 0; count < 5; count++) {
    var invalidAnswer = true;
    var userResponse;
    while (invalidAnswer){
      userResponse = prompt(QnAnRarray[count][0]).toLowerCase();
      if (userResponse === QnAnRarray[count][1] || userResponse === QnAnRarray[count][2]) {
        alert(defaultCorrect + 'The answer is ' + QnAnRarray[count][2] + '. ' + QnAnRarray[count][5]);
        invalidAnswer = false;
        totalCorrect++;
      }
      else if (userResponse === QnAnRarray[count][3] || userResponse === QnAnRarray[count][4]) {
        alert(defaultIncorrect + 'The answer is ' + QnAnRarray[count][2] + '. ' + QnAnRarray[count][5]);
        invalidAnswer = false;
      }
      else {
        alert(defaultWrongResponse);
      }
      QnAnRarray[count][6] = userResponse;
    }
  }
}

questionsOneThroughFive();

function questionSix() {
  favNumber = Math.floor((Math.random() * 10) + 1);
  console.log('favNumber = ' + favNumber); //checks that the random number generator is working as intended
  var answer6 = 'The number I was thinking of was ' + favNumber;
  var incorrect = true;
  var counter = 4;



  while (incorrect && (counter >= 1)) {
    console.log('counter before question' + counter);
    prompt6 = 'I\'m thinking of a whole number between 1 and 10. Try to guess the number! \n You have ' + counter + ' tries left.';
    console.log('counter = ' + counter); //checks that the counter is working as intended
    response6 = parseInt(prompt(prompt6));
    console.log('user response = ' + response6); //checks that the response is captured appropriately
    counter--;
    if (response6 === favNumber) {
      alert(defaultCorrect + answer6 + '.');
      incorrect = false;
      totalCorrect++;
    }
    else if (counter !== 0) {
      if (response6 > favNumber) {
        alert(defaultIncorrect + ' Try again!\n' + 'HINT: try guessing a smaller number.');
      }
      else {
        alert(defaultIncorrect + ' Try again!\n' + 'HINT: try guessing a larger number.');
      }
    }
    else {
      alert(defaultIncorrect + ' That was your last try, sorry! \n The number I was thinking of was ' + favNumber + '.');
    }
    question6responses[counter] = response6; //used to store multiple user answers to the same question
  }
}
questionSix();


function questionSeven() {
  var answer7 = 'Chocolate, pizza, mexican, cheese, and fruit are my favorite foods!';
  var incorrect = true;
  var counter = 6;
  var answers7 = ['chocolate', 'pizza' , 'mexican', 'cheese', 'fruit'];

  while (incorrect && (counter > 0)) {
    prompt7 = 'Name one of my favorite foods. \n You have ' + counter + ' tries left.';
    console.log('counter = ' + counter); //checks that the counter is working as intended
    response7 = (prompt(prompt7)).toLowerCase();
    console.log('user response = ' + response7); //checks that the response is captured appropriately
    question7responses.push(response7);
    console.log('new response 7: ' + response7); //used to store multiple user answers to the same question
    counter -= 1;
    for (var count3 = answers7.length - 1; count3 >= 0; count3--) {
      if (response7 === answers7[count3]) {
        alert(defaultCorrect + answer7);
        incorrect = false;
        totalCorrect++;
      }
    }
    if (incorrect && counter !== 0) {
      alert(defaultIncorrect + 'Try again!');
    }
    else if (incorrect) {
      alert(defaultIncorrect + 'Sorry, you ran out of attempts. ' + answer7);
    }
  }
}

questionSeven();

function writeSummary() {
  document.write('Thanks for playing, ' + userName + '! Here is a summary of the game, the questions asked, and your answers: </br></br>');

  for (var count2 = 0; count2 < 5; count2++) { //prints info for questions 1-5
    document.write('<br>Question: ' + QnAnRarray[count2][0]);
    document.write('<br>Your answer: ' + QnAnRarray[count2][6]);
    document.write('<br>Correct answer: ' + QnAnRarray[count2][2] + '<br>');
  }
  document.write('<br>Question: ' + prompt6); //question 6 info
  document.write('<br>Your answers: ' + question6responses);
  document.write('<br>Correct answer: ' + favNumber + '<br>');

  document.write('<br>Question: ' + prompt7); //question 7 info
  document.write('<br>Your answers: ' + question7responses);
  document.write('<br>Correct answers: ' + 'chocolate, pizza, mexican, cheese, fruit' + '<br>');

  document.write('<br>Your game score: ' + totalCorrect + ' out of 7 correct!');
}

writeSummary();
