
// Lab 3 Walkthrough
const name1 = prompt("What is name1?");
const name2 = prompt("What is name2?");
const name3 = prompt("What is name3?");

const allNames = [name1, name2, name3]; // Array of strings

const firstName = name1;
let longestNameLen = firstName.length;

let answer = [];

for (var i = 0; i < allNames.length; i++) {
    if (allNames[i].length > longestNameLen) {
        longestNameLen = allNames[i].length;
    } else if (allNames[i].length === longestNameLen) {
        answer.push()
    }
}

// for in example
let x = {
    "a": 1,
    "b": 2,
    "c": 3
}

for(let key in x) {
    console.log(x[key]);
}

// for of example
let a = [1,2,3,4,5];

for (let val of a) {
    console.log(val);
}


// try to continue and not print 5

for(let a = 0; a <= 10; a++) {
    if (a === 5) {
        break;
    }

    console.log(a);
}


// Search example
const searchFor = 4;

const searchIn = [1,9,2,5,2,8,4,3,2,0];

const cache = {}

// Search for 4 in the searchIn array
for(let b = 0; b < searchIn.length;b++) {
    // when searchIn[b] === 4, then do something in braces

    console.log(b);

    if (cache[searchFor]) { // cache[4] = true
        console.log(`${searchFor} is in searchIn array`);
    }

    cache[searchIn[b]] = true;

    if (searchIn[b] === searchFor) {
        console.log(`${searchFor} is in searchIn array`);
    }
}


if (cache[searchFor]) {
    console.log(`${searchFor} is in searchIn array`);
}


function hello() {
    console.log("hello!!");
}

hello();

const hello = function() {
    console.log("hello!!");
}

hello();

const hello = () => {
    console.log("hello");
}

hello();

const hiback = (func) => {
    func();
};

function() {
    console.log("whats up");
}

hiback(hello);


function calculator(numOne, numTwo = 20) { // numOne and numTwo are parameters
    // numOne = 10
    // numTwo = 2
    console.log(numOne); // 2
    console.log(numTwo); // 20
}

calculator(2); // 10 and 2 are arguments


const multiply = (numOne, numTwo) => {
    return 2;
}

const result = multiply(40,3);
console.log(result);

// Anonymous function, IIFY
const result = (function(length, width) {
    return length * width;
})(10, 30);

// Hoisting
let newUser;

function processList() {
    newUser = "Adam";
}
  

newUser = "hello";
processList();

console.log(newUser);

let newUser = "Adam";
function processList() {
  console.log(newUser);
  if (true) {
    let newUser = "Yasmine";
  }
}

processList(); // "Adam" 


const inputOne = parseInt("3");

// Calculator function in class exercise 
let numOne = prompt("Put in a number");
const op = prompt("Put in an operator");
let numTwo = prompt("Put in another name");

numOne = parseInt(numOne);
numTwo = parseInt(numTwo);

function calculator(numOne, op, numTwo) {
    if (op === "*") {
        return numOne * numTwo;
    } else if (op === "/") {
        return numOne / numTwo;
    } else if (op === "+") {
        return numOne + numTwo;
    } else if (op === "-") {
        return numOne - numTwo;
    }
}

// Calculator function in class exercise (with switch)
function calculator(numOne, op, numTwo) {
    let result;
    switch(op) {
        case "*": // op === "*"
            result = numOne * numTwo;
            break;
        case "/":
            result = numOne / numTwo;
            break;
        case "+":
            result = numOne + numTwo;
            break;
        case "-":
            result = numOne - numTwo;
            break;
    }

    return result;
}

const result = calculator(numOne, op, numTwo);

console.log(result);

// Uses of Arrays
let x = [1,4,5,10,11, 10];
x.push(12); // [1, 4, 5, 10, 11, 12, 10]

console.log(x.indexOf(10));
