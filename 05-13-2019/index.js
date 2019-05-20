
function printNums(num1, num2, num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
}

function printNumbers(...nums) {
    console.log(nums)

    for(let i = 0; i < nums.length;i++) {
        console.log(nums[i]);
    }
}

printNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// Create a function with two parameters

//     - 1st parameter: the num of elements you want to print in array
//     - 2nd parameter: the array of numbers


function(3, 1, 2, 3, 4, 5, 6) => [1,2,3]


function printNums(numElementsToPrint, ...nums) {
    let x = []
    for(let i = 0; i < numElementsToPrint;i++) {
        console.log(nums[i]);
        x.push(nums[i]);  // 1st iteration: x = [4], 2nd iteration: x = [4,6], x = [4,6,7]
    }

    // return nums.slice(0, numElementsToPrint);
    return x

}

// numElementsToPrint = 3
// nums = [4, 6]
console.log(printNums(3, 4, 6, 7, "hello"));


function test(a, b, c) {
    console.log(a); // a = "first argument"
    console.log(b); // b = "second argument"
    console.log(c); // c = "third argument"
}

let x = ["second argument", "third argument"]
test("first argument", ...x);


function f(firstName, lastName, age) => "firstName lastName is age years old"


f(args) => "Ajay Tandon is 29 years old"

// Rules:

//     - When you execute the function, you can only have 1 argument
//     - When you declare the function, you have to have 3 parameters

function f(firstName, lastName, age) => "firstName lastName is age years old"


f(args) => "Ajay Tandon is 29 years old"

// Rules:

//     - When you execute the function, you can only have 1 argument
//     - When you declare the function, you have to have 3 parameters


function prettyName(firstName, lastName, age) {
    console.log(firstName, lastName, age);

    // // string interpolation
    // return `${firstName} ${lastName} is ${age} years old`;

    // string concatenation
    return firstName + " " + lastName + " is " + age + " years old";
}

const args = ["Ajay", "Tandon", 29];
const s = prettyName(...args);
console.log(s);

let o = {
    firstName: "Ajay",
    lastName: "Tandon",
    age: 29
};




let d = { ...o }

o['randomkey'] = 3;

console.log(d);

let d = { ...o }

console.log(d);

let a = [1, 3, 5, 6, 8, 9, 10];

let b = [...a];

a.push(20);

console.log(b);


let user = {
    firstName: "Ajay",
    lastName: "Tandon",
    age: 29
};

// const f = user.firstName;
// const l = user.lastName;

const { firstName } = user;

console.log(firstName);


// Create a function with two parameters:

//     - 1st parameter: is the number of times you want to copy an object (number)
//     - 2nd parameter: object

//     return an array of objects. the array length should be the first parameter



// Create a function with two parameters:

//     - 1st parameter: is the number of times you 
//         want to copy an object (number)
//     - 2nd parameter: object you want to copy

//     return an array of objects. the array length should 
//     be the first parameter. 
    
//     Remember: Each object can not reference the same point
//     in memory


function copyMachine(numOfCopies, objectToCopy) {
    copies = [];

    for(let i = 0; i < numOfCopies;i++) {
        copies.push({...objectToCopy});
    }

    return copies;
}

// numOfCopies = 4
// objectToCopy = {'a': 1, 'b': 2}
let result = copyMachine(4, {'a': 1, 'b': 2});

console.log(result[0]);

result[0]['a'] = 10;
console.log(result);


