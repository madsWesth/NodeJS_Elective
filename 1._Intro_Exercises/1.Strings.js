// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const ex1Result = parseFloat(numberOne) + parseFloat(numberTwo)

console.log("exercise 1 result: ", ex1Result)
// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

//I dont want a string representation of the number so im not using .toFixed(2) here
const ex2Result = Math.round(parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo) * 100) / 100

console.log("exercise 2 result: ", ex2Result)

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const ex3Result = Math.round((one + two + three)/3 * 100000) / 100000

//could use toFixed(5) to show the decimals. in this case they just are truncated since the result is an integer and not a rational number
console.log("exercise 3 result: ", ex3Result)




// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

const ex4Result = letters[2]

console.log("exercise 4 result: ", ex4Result)


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const ex5Result = fact.replace("j", "J")

console.log("exercise 5 result: ", ex5Result)

// --------------------------------------



