'use strict';

/*I use this to comment out all the Js while I test the rest of the site so I don't have to go through the questions while I do so*/
var userName = prompt('Welcome! What is your name? ');
alert(userName + ', you have stumbled upon a game wherein you will be answering some questions about me. Here are some guidelines:\n\n Punctuation doesn\'t matter, but spelling does! Please stick to yes/y or no/n for yes or no questions; otherwise, I will have to chide you! At the end of the game, I will tell you how well you did. Good luck!');
//var prompt1 = 'Was Yana born in the United States?';
//var response1;
//var answer1 = 'Yana was born in Bulgaria, not in the United States.';/
//var defaultWrongResponse = 'I did not recognize your response. Please try again.';
var defaultCorrect = 'That is correct.\n';
var defaultIncorrect = 'That is incorrect.\n';
//var defaultGibberish = 'Their answer was gibberish.';
//var invalidAnswer = true;
//var QnAinfo = [];

var Qarray = ['Was Yana born in the United States?', 'Does Yana have any cats?', 'Is Yana\'s favorite color black?', 'Is Yana 42 years old?', 'Did Yana want to be President of the US when she was younger?', 'I\'m thinking of a whole number between 1 and 10. Try to guess the number!', 'Name one of my favorite foods.'];
for (var count = -1; count < 7; count++) {
  var invalidAnswer = true;
  while (invalidAnswer){
    response1 = prompt(Qarray[count]).toLowerCase();
    if (response1 === 'n' || response1 === 'no') {
      alert(defaultCorrect + answer1);
      console.log(prompt1 + ' They answered no. How did this person know I am an alien?');
      invalidAnswer = false;
    }
    else if (response1 === 'y' || response1 === 'yes') {
      alert(defaultIncorrect + answer1);
      console.log(prompt1 + ' Ha! They think I was born in the US. I tricked them as I expected.');
      invalidAnswer = false;
    }
    else {
      alert(defaultWrongResponse);
      console.log(prompt1 + ' ' + defaultGibberish);
    }
  }
}


/*
while (invalidAnswer){
  response1 = prompt(prompt1).toLowerCase();
  if (response1 === 'n' || response1 === 'no') {
    alert(defaultCorrect + answer1);
    console.log(prompt1 + ' They answered no. How did this person know I am an alien?');
    invalidAnswer = false;
  }
  else if (response1 === 'y' || response1 === 'yes') {
    alert(defaultIncorrect + answer1);
    console.log(prompt1 + ' Ha! They think I was born in the US. I tricked them as I expected.');
    invalidAnswer = false;
  }
  else {
    alert(defaultWrongResponse);
    console.log(prompt1 + ' ' + defaultGibberish);
  }
}

var prompt2 = 'Does Yana have any cats?';
var response2;
var answer2 = 'Yana used to have three cats, but they\'re all dead.';
invalidAnswer = true;

while (invalidAnswer) {
  response2 = prompt(prompt2).toLowerCase();
  if (response2 === 'n' || response2 === 'no') {
    alert(defaultCorrect + answer2);
    console.log(prompt2 + ' They answered no. Lucky guess, probably.');
    invalidAnswer = false;
  }
  else if (response2 === 'y' || response2 === 'yes') {
    alert(defaultIncorrect + answer2);
    console.log(prompt2 + ' They answered yes. They must not be aware that all my cats died.');
    invalidAnswer = false;
  }
  else {
    alert(defaultWrongResponse);
    console.log(prompt2 + ' ' + defaultGibberish);
  }
}

var prompt3 = 'Is Yana\'s favorite color black?';
var response3;
var answer3 = 'Yana\'s favorite color is black, and she \ndoesn\'t care that black is not technically a single color.';
invalidAnswer = true;

while (invalidAnswer) {
  response3 = prompt(prompt3).toLowerCase();
  if (response3 === 'n' || response3 === 'no') {
    alert(defaultIncorrect + answer3);
    console.log(prompt3 + ' They answered no. They clearly know very little about me.');
    invalidAnswer = false;
  }
  else if (response3 === 'y' || response3 === 'yes') {
    alert(defaultCorrect + answer3);
    console.log(prompt3 + ' They answered yes. They know me well.');
    invalidAnswer = false;
  }
  else {
    alert(defaultWrongResponse);
    console.log(prompt3 + ' ' + defaultGibberish);
  }
}

var prompt4 = 'Is Yana 42 years old?'
var response4;
var answer4 = 'Yana is 37 years old.';
invalidAnswer = true;

while (invalidAnswer) {
  response4 = prompt(prompt4).toLowerCase();
  if (response4 === 'n' || response4 === 'no') {
    alert(defaultCorrect + answer4);
    console.log(prompt4 + ' They answered no. Good, now I don\'t have to kill them in their sleep for thinking I\' m for thinking I am fiver years older than I am.');
    invalidAnswer = false;
  }
  else if (response4 === 'y' || response4 === 'yes') {
    alert(defaultIncorrect + answer4);
    console.log(prompt4 + ' They answered yes. Since they think I am five years older than I am, I will have to kills them in their sleep. ');
    invalidAnswer = false;
  }
  else {
    alert(defaultWrongResponse);
    console.log(prompt4 + ' ' + defaultGibberish);
  }
}

var prompt5 = 'Did Yana want to be President of the US when she was younger?';
var response5;
var answer5 = 'Yana did want to be President, but fortunately she became wiser as the years went on.';
invalidAnswer = true;

while (invalidAnswer) {
  response5 = prompt(prompt5).toLowerCase();
  if (response5 === 'n' || response5 === 'no') {
    alert(defaultIncorrect + answer5);
    console.log(prompt5 + ' They answered no. They probably didn\'t want to believe I could be that stupid. ');
    invalidAnswer = false;
  }
  else if (response5 === 'y' || response5 === 'yes') {
    alert(defaultCorrect + answer5);
    console.log(prompt5 + ' They answered yes. How did they know I wanted to be President when I was young?');
    invalidAnswer = false;
  }
  else {
    alert(defaultWrongResponse);
    console.log(prompt5 + ' ' + defaultGibberish);
  }
}
*/
//var response6;
//var favNumber = Math.floor((Math.random() * 10) + 1);
//console.log('favNumber = ' + favNumber); //checks that the random number generator is working as intended
//var answer6 = 'The number I was thinking of was ' + favNumber;
var incorrect = true;
var counter = 4;
//var prompt6;

/*while (incorrect && (counter >= 1)) {
  console.log('counter before question' + counter);
  prompt6 = 'I\'m thinking of a whole number between 1 and 10. Try to guess the number! \n You have ' + counter + ' tries left.';
  console.log('counter = ' + counter); //checks that the counter is working as intended
  response6 = parseInt(prompt(prompt6));
  console.log('user response = ' + response6); //checks that the response is captured appropriately
  counter--;
  if (response6 === favNumber) {
    alert(defaultCorrect + answer6 + '.');
    incorrect = false;
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
}*/
var response7;
var prompt7;
var answer7 = 'Chocolate, pizza, mexican, cheese, and fruit are my favorite foods!';
incorrect = true;
counter = 6;

while (incorrect && (counter >= 1)) {
  prompt7 = 'Name one of my favorite foods. \n You have ' + counter + ' tries left.';
  console.log('counter = ' + counter); //checks that the counter is working as intended
  response7 = (prompt(prompt7)).toLowerCase();
  console.log('user response = ' + response7); //checks that the response is captured appropriately
  counter--;
  if (response7 === 'chocolate' || response7 === 'pizza' || response7 === 'mexican' || response7 === 'cheese' || response7 === 'fruit') {
    alert(defaultCorrect + answer7);
    incorrect = false;
  }
  else if (counter !== 0) {
    alert(defaultIncorrect + 'Try again!');
  }
  else {
    alert(defaultIncorrect + 'Sorry, you ran out of attempts. ' + answer7);
  }

}

//document.write('Here is a summary of the game, the questions asked, and your answers: </br></br>');
//document.write(prompt1 + ' You answered \'' + response1 + '\'.');
//document.write('</br>' + answer1 + '</br></br>');
/*document.write(prompt2 + ' You answered \'' + response2 + '\'.');
document.write('</br>' + answer2 + '</br></br>');
document.write(prompt3 + ' You answered \'' + response3 + '\'.');
document.write('</br>' + answer3 + '</br></br>');
document.write(prompt4 + ' You answered \'' + response4 + '\'.');
document.write('</br>' + answer4 + '</br></br>');
document.write(prompt5 + ' You answered \'' + response5 + '\'.');
document.write('</br>' + answer5 + '</br></br>');*/
