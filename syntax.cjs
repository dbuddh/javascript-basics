const useRandomUUID = () => {
  const crypto = require('crypto');
  console.log(crypto.randomUUID());
}

// process user input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the type of function to execute: ', (userInput) => {
  switch (userInput) {
    case 'useRandomUUID':
      useRandomUUID()
      break;
    default:
      console.log("invalid input")
  }
  rl.close();
});
