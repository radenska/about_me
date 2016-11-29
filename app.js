'use strict';

var prompt1 = 'Was Yana born in the United States?';
var response1 = prompt(prompt1).toLowerCase();
var answer1 = 'Yana was born in Bulgaria, not in the United States.';
var defaultWrongResponse = 'I did not recognize your response.';
var defaultCorrect = 'That is correct.\n';
var defaultIncorrect = 'That is incorrect.\n';

if (response1 === 'n' || response1 === 'no') {
  alert(defaultCorrect + answer1);
}
else if (response1 === 'y' || response1 === 'yes') {
  alert(defaultIncorrect + answer1);
}
else {
  alert(defaultWrongResponse);
}

var prompt2 = 'Does Yana have any cats?';
var response2 = prompt(prompt2).toLowerCase();
var answer2 = 'Yana used to have three cats, but they\'re all dead.';

if (response2 === 'n' || response2 === 'no') {
  alert(defaultCorrect + answer2);
}
else if (response2 === 'y' || response2 === 'yes') {
  alert(defaultIncorrect + answer2);
}
else {
  alert(defaultWrongResponse);
}

var prompt3 = 'Is Yana\'s favorite color black?';
var response3 = prompt(prompt1).toLowerCase();
var answer3 = 'Yana\'s favorite color is black, and she \ndoesn\'t care that black is not technically a single color.';

if (response3 === 'n' || response3 === 'no') {
  alert(defaultCorrect + answer3);
}
else if (response3 === 'y' || response3 === 'yes') {
  alert(defaultIncorrect + answer3);
}
else {
  alert(defaultWrongResponse);
}

var prompt4 = 'Is Yana 42 years old?'
var response4 = prompt(prompt1).toLowerCase();
var answer4 = 'Yana is 37 years old.';

if (response4 === 'n' || response4 === 'no') {
  alert(defaultCorrect + answer4);
}
else if (response4 === 'y' || response4 === 'yes') {
  alert(defaultIncorrect + answer4);
}
else {
  alert(defaultWrongResponse);
}

var prompt5 = 'Did Yana want to be President of the US when she was younger?';
var response5 = prompt(prompt1).toLowerCase();
var answer5 = 'Yana did want to be President, but fortunately she became wiser as the years went on.';

if (response5 === 'n' || response5 === 'no') {
  alert(defaultCorrect + answer5);
}
else if (response5 === 'y' || response5 === 'yes') {
  alert(defaultIncorrect + answer5);
}
else {
  alert(defaultWrongResponse);
}

document.write('Here is a summary of the game, the questions asked, and your answers: </br>');
document.write(prompt1 + 'You answered ' + question1);
document.write('</br>' + answer1 + '</br></br>');
document.write('test test');
document.write(prompt5 + 'You answered ' + question2);
document.write('</br>' + answer2 + '</br></br>');
document.write(prompt3 + 'You answered ' + question3);
document.write('</br>' + answer3 + '</br></br>');
document.write('test test');
document.write(prompt4 + 'You answered ' + question4);
document.write('</br>' + answer4 + '</br></br>');
document.write(prompt5 + 'You answered ' + question5);
document.write('</br>' + answer5 + '</br></br>');
