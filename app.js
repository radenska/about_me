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
var question6 = ['I\'m thinking of a whole number between 1 and 10. Try to guess the number! '];
var question7correct = 'chocolate, pizza, mexican, cheese, fruit';
var favNumber;
var prompt7; //question 7 info
var response7;
var question7responses = [];
var question7 = ['Name one of my favorite foods. '];

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
    question6responses.push(response6); //used to store multiple user answers to the same question
    console.log('user response = ' + response6); //checks that the response is captured appropriately
    counter--;
    if (response6 === favNumber) {
      alert(defaultCorrect + answer6 + '.');
      incorrect = false;
      totalCorrect += 1;
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
        totalCorrect += 1;
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

function removeEmptyAnswers (Responses) {
  for (var count = 0; count < Responses.length; count++) {
    if (Responses[count] === '') {
      Responses[count].pop;
    }
  }
}

removeEmptyAnswers(question6responses);
removeEmptyAnswers(question7responses);

function intro() {
  var summary = document.getElementById('JScontent');
  var newItem = document.createElement('p');
  var newEl = document.createTextNode('Thanks for playing, ' + userName + '! Here is a summary of the game, the questions asked, and your answers: ');
  newItem.appendChild(newEl);
  summary.appendChild(newItem);
}

intro();

function addEachQuestion(qNum) {
  var summary = document.getElementById('JScontent');
  var newItem = document.createElement('p');
  var newEl = document.createTextNode('Question: ' + QnAnRarray[qNum][0] + ' Your answer: ' + QnAnRarray[qNum][6] + ' Correct answer: ' + QnAnRarray[qNum][2]);
  newItem.appendChild(newEl);
  summary.appendChild(newItem);
}

function addSummary() {
  for (var i2 = 0; i2 < 5; i2++) {
    var qNum = i2;
    addEachQuestion(qNum);
  }
}

function addLastTwo(question, responses, answer) {
  var summary = document.getElementById('JScontent');
  var newItem = document.createElement('p');
  var newEl = document.createTextNode('Question: ' + question + ' Your answer(s): ' + responses + ' Correct answer: ' + answer);
  newItem.appendChild(newEl);
  summary.appendChild(newItem);
}

addSummary();
addLastTwo(question6, question6responses, favNumber);
addLastTwo(question7, question7responses, question7correct);

function score() {
  var summary = document.getElementById('JScontent');
  var newItem = document.createElement('p');
  var newEl = document.createTextNode('Your game score: ' + totalCorrect + ' out of 7 correct!');
  newItem.appendChild(newEl);
  summary.appendChild(newItem);
}

score();
