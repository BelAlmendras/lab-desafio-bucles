// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i < 106; i++) {
    
    if (i % 3 === 0) {
      console.log("Fizz");
    };
    if (i % 5 === 0) {
      console.log("Buzz");
    };
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    };
    console.log(i);
  };