let buzzWords = [
    "Fizz1",
    "Buzz1",
    "Woof1",
    "Bark1",
    "Awoo1",
    "Bang1"
  ];
const prompt = require("prompt-sync")();
const num = parseInt(prompt("Write a number: "));

let resultados = [];

  if (num > 105 || num < 1) {
        console.log("Please write a number between 1 and 105");
  } else {
    for (let i = 1; i <= num; i++) {
      let contador = 0;
    if (i % 3 === 0) {
      console.log("Fizz");
    }
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    }
    else if (i % 7 === 0) {
      console.log("Woof");
    }
    else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log("FizzBuzzWoof");
    };
      for (j=1; j<=i; j++) {
    
      if (i % j === 0)
      {
      contador++;
      }
      };
      if (contador === 2)
      {
        console.log(buzzWords[Math.floor(Math.random() * buzzWords.length)]);
      };
            resultados.push(i);}

    }

    console.log(resultados);
    console.log("It took " + resultados.length + " iterations to generate the sequence");

