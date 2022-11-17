const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What is your name?", (name) => {
  console.log(`Welcome ${name}`);
  readline.question("How old are you?", (age) => {
    age < 16
      ? console.log("You are not allowed to drive in Iowa")
      : console.log("You'r allowed to get a driver license in Iowa");
    readline.close();
  });
});
