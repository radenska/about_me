'use strict';

var prompt1 = 'Was Yana born in the United States?';
var response1 = prompt(prompt1).toLowerCase();
var answer1 = 'Yana was born in Bulgaria, not in the United States.';
var defaultWrongResponse = 'I did not recognize your response.';

if (response1 === 'n' || response1 === 'no') {
  alert('Good work!]\n' + answer1);
}
else if (response1 === 'y' || response1 === 'yes') {
  alert('That is incorrect!\n' + answer1);
}
else {
  alert(defaultWrongResponse);
}

var prompt2 = 'Was Yana born in the United States?';
var response2 = prompt(prompt2).toLowerCase();
var answer2 = 'Yana was born in Bulgaria, not in the United States.';

if (response2 === 'n' || response2 === 'no') {
  alert('Good work!]\n' + answer2);
}
else if (response2 === 'y' || response2 === 'yes') {
  alert('That is incorrect!\n' + answer2);
}
else {
  alert(defaultWrongResponse);
}

var prompt3 = 'Was Yana born in the United States?';
var response3 = prompt(prompt1).toLowerCase();
var answer3 = 'Yana was born in Bulgaria, not in the United States.';

if (response3 === 'n' || response3 === 'no') {
  alert('Good work!]\n' + answer3);
}
else if (response3 === 'y' || response3 === 'yes') {
  alert('That is incorrect!\n' + answer3);
}
else {
  alert(defaultWrongResponse);
}

var prompt4 = 'Was Yana born in the United States?'
var response4 = prompt(prompt1).toLowerCase();
var answer4 = 'Yana was born in Bulgaria, not in the United States.';

if (response4 === 'n' || response4 === 'no') {
  alert('Good work!]\n' + answer4);
}
else if (response4 === 'y' || response4 === 'yes') {
  alert('That is incorrect!\n' + answer4);
}
else {
  alert(defaultWrongResponse);
}

var prompt5 = 'Was Yana born in the United States?';
var response5 = prompt(prompt1).toLowerCase();
var answer5 = 'Yana was born in Bulgaria, not in the United States.';

if (response5 === 'n' || response5 === 'no') {
  alert('Good work!]\n' + answer5);
}
else if (response5 === 'y' || response5 === 'yes') {
  alert('That is incorrect!\n' + answer5);
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
