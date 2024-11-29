const prompt = require('prompt-sync')();
//Capture user input
const userInput = () => Number(prompt("Enter your marks: "))

//Assigning the mark a grade
function grading(input) {
    if (input>0 && input<=100){
        if (input > 79){
            return "A"
        } else if (input >= 60 && input <= 79){
            return "B"
        } else if (input >= 50 && input <= 59){
            return "C"
        } else if (input >= 40 && input <= 49){
            return "D"
        } else {
            return "E"
        }
    } else {
        console.log("Marks should be between 0 and 100")
    }
}

console.log(`Grade: ${grading(userInput())}`)
