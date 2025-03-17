let readlineSync = require('readline-sync');

// Step 1: Prompt the user for a word or phrase
let userInput = readlineSync.question('Enter a word or phrase: ');

// Step 2: Prompt the user for an index number
let index = readlineSync.questionInt('Enter an index number: ');

// Step 3 & 4: Access the character at that index and print it out
if (index >= 0 && index < userInput.length) {
    console.log(`The character at index ${index} is: '${userInput[index]}'`);
} else {
    console.log('Invalid index. Please enter a number within the range of the string length.');
}
