'use strict';

/*I use this to comment out all the Js while I test the rest of the site so I don't have to go through the questions while I do so*/

var prompt1 = 'Was Yana born in the United States?';
var response1;
var answer1 = 'Yana was born in Bulgaria, not in the United States.';
var defaultWrongResponse = 'I did not recognize your response. Please try again.';
var defaultCorrect = 'That is correct.\n';
var defaultIncorrect = 'That is incorrect.\n';
var defaultGibberish = 'Their answer was gibberish.';
var invalidAnswer = true;
var QnAinfo = [];

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

document.write('Here is a summary of the game, the questions asked, and your answers: </br></br>');
document.write(prompt1 + ' You answered \'' + response1 + '\'.');
document.write('</br>' + answer1 + '</br></br>');
document.write(prompt2 + ' You answered \'' + response2 + '\'.');
document.write('</br>' + answer2 + '</br></br>');
document.write(prompt3 + ' You answered \'' + response3 + '\'.');
document.write('</br>' + answer3 + '</br></br>');
document.write(prompt4 + ' You answered \'' + response4 + '\'.');
document.write('</br>' + answer4 + '</br></br>');
document.write(prompt5 + ' You answered \'' + response5 + '\'.');
document.write('</br>' + answer5 + '</br></br>');
