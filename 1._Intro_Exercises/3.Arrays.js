// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 


console.log("exercise 1 result: ", letters[1])

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

friends.push(
    {
        name: "Michael",
        loser: true
    },
    {
        name: "Jimmy",
        loser: true
    },
    {
        name: "Mads",
        loser: false
    }
)

console.log("exercise 2 result: ", friends)
// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

const ex3Result = significantMathNumbers.indexOf(1729)

console.log("exercise 3 result: ", ex3Result)


// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2,0,"hamburger", "soda", "pizza")

console.log("exercise 4 result: ", diet)

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop()
//.shift() to remove the first element

console.log("exercise 5 result: ", diet)



// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = diet.slice()

console.log("exercise 6 result: ", dinnerTray)

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for(let i = 0; i < lettersExpanded.length; i++){
    if(i % 2 === 0){
        console.log(lettersExpanded[i+1])
    }
}


// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

console.log("exercise 8 result: ")
numbers.forEach((number) => {
    if(number > 6 || number < 0){
        console.log(number)
    } else{
        discardedNumbers.push(number)
    }
})

console.log("numbers: ", numbers, "\ndiscardedNumbers: ", discardedNumbers)

// --------------------------------------


