const prompt = require("prompt-sync")();
const num = parseInt(prompt("Write a number: "));
  if (num > 105 || num < 1) {
        console.log("Please write a number between 1 and 105");
  }
  else {
    for (let i = 1; i < num; i++) {
    
    if (i % 3 === 0) {
      console.log("Fizz");
    };
    if (i % 5 === 0) {
      console.log("Buzz");
    };
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    };
    if (i % 7 === 0) {
      console.log("Woof");
    };
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log("FizzBuzzWoof");
    };
    console.log(i);

  };
  }
