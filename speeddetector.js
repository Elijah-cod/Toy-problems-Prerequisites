const prompt = require("prompt-sync")();

let points = 0;

while (points <= 12) {
//Capture speed input
  const speedInput = () => Number(prompt("Speed registered: "));

  function speedChecker(speed) {
    if (speed < 70) {
      console.log("Ok") 
    } else {
      const num = speed - 70;
      const demerit = num / 5;
      points += demerit;
    }
  }
  speedChecker(speedInput());
  console.log(`Points: ${points}`);
}
console.log("License suspended!");
