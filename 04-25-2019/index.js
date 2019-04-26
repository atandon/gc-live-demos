/*
 This is a comment block
*/

// This is a comment line


// Declaring and assigning a number, and logging that number in console
var currentYear = 1000;
console.log(currentYear);

// Declaring and assigning a string, and logging that string in console
var name = "Jimmy";
console.log(name);

// Declaring and assigning a boolean, and logging that boolean in console
var isCorrect = false;
console.log(isCorrect);

// Declaring a variable, but not assigning, and logging that into console
// Returns undefine
var x;
console.log(x);

// Declaring a variable and assigning to null, and logging that into console
var y = null;
console.log(y);

// Declaring and assigning variable to object, and logging that into console
var z = {};
console.log(z);

// String concatenation and string literals
// They both do the same thing, but string literals are much easier to read when concatenating many variables
var name = "tim";
console.log("my name is " + name);
console.log(`my name is ${name}`);

// Declaring and assigning a variable to a boolean
// Using double equals or triple equals for an equality check
// Remember: Triple equals is considered best practice. It checks for type and value equality, while double equals checks for only value using type coercion 
let isCorrect = true;
console.log(isCorrect == 1);
console.log(isCorrect === 1);

// Declaring and assigning variables to number, using math operations to add, subtract, multiply, divide, and mod
let valOne = 5;
let valTwo = 12;
console.log(valOne + valTwo);
console.log(valOne - valTwo);
console.log(valOne * valTwo);
console.log(valOne / valTwo);
console.log(valTwo%valOne); // 12%5 12-10 = 2


// Short hand way for incrementing variables
// Note If you want the value to return the incremented up value, always put the '++' in front of the variable
console.log(valOne++);
console.log(valOne);


// Short hand way for math operators reassigning to variables
let x = 10;
x = x + 2; // 12
x += 2; // 14
x -= 4; // 10
x *= 2; // 20
x /= 2; // 10  // x = x/2;

console.log(x);

// Can you subtract strings? No
let x = "FirstName";
let y = "LastName";
x -= y; // "FirstNameLastName"?
console.log(x);


// Different conditions for equality
// Remember, triple equals and triple not equals is always best practice
let x = true;
let y = 1;
console.log(x == y);
console.log(x === y);
console.log(x !== y);
console.log(x != y); // true != 1 ==>   toNumber(true) == 1 ==> 1 == 1

// Declaring and assigning two variables, then checking if one variable is GREATER THAN the other variable
let x = 10;
let y = 12;
console.log(y > x);

// Will a type coerced string equal to a different integer? No
let t = "3";
let z = 4;
console.log(t == z);

// Condition blocks
// if/else if/else
// Remember else does not have a condition, it acts as a default
let a = 4;
let b = 5;
if (b < a) { // FALSE
    console.log("yes b is greater than a");
} else if(0 === 1) { // FALSE
    console.log("b is NOT greater than a.");
} else {
    // default
    console.log("default");
}


// Exercise #1

// Pseudocode:
// declare number of people = 10
// number of people > 7 then print something
// if true, log a string
// if false, log sorry

const numberOfPeople = 5;
const limitForDiscount = 7;

if (numberOfPeople > limitForDiscount) { // 10 > 7
    console.log("You have enough people to get a discount!");
} else {
    console.log("Sorry, you need more people in your group!");
}


// Learning Switch statements
// When should you use switch statements? When you have way too many if/else if/else conditions
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

let input = 1;

if (input === a) {
    console.log("equals a");
} else if (input === b) {
    console.log("equals b");
} else if (input === c) {
    console.log("equals c");
} else if (input === d) {
    console.log("equals d");
}

switch(input) {
    case a: // input === a
        console.log("equals a");
        break;
    case b: // input === b
        console.log("equals b");
        break;
    case c:
        console.log("equals c");
        break;
    default:
        console.log("this is default");
        break;

}


// Exercise #2

// Pseudocode:
// assign points to 10
// if points is greater than or equal to 6
//     print passed
// else
//     print failed
// print percentage of quiz


const points = 4;

if (points >= 6) {
    console.log("pass");
} else {
    console.log("fail");
}

// 4/10
const pctScore = (points * 10);
console.log(`${pctScore}%`);