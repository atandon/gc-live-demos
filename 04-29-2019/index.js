// Defining Arrays
// Remember: index always starts with 0
let x = ["a", "b", "c"]; // array of strings
let y = [1, 2, 3]; // array of numbers
let z = [{}, {}, {}];
let a = [true, false, true, false];

console.log(x[1]);
console.log(y[2]);

// try to print every element in array b
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let g = 0; g < b.length;g++) {
    console.log(g)
    console.log(b[g]); // get index value g of b
}

let x = 0;
do { 
    console.log(b[x]);
    x++;
} while (x < b.length);

// 0 < 10
// 1 < 10
// 2 < 10
// ...
// 10 < 10


// What's happening in a loop?
// first loop: g = 0, 0 < 10
// second loop: g = 1, 1 < 10
// ..
// tenth loop: g = 9, 9 < 10
// 11th loop: g = 10, 10 < 10

const x = {
    "a": 1,
    "b": 3,
    "c": 3
};

// Goal is to find the key with a value of 3
for(let key in x) {
    if (x[key] === 3) {
        console.log(key);
    }
}

// for of loop
let x = [1, 2, 3, 4, 5];
for(let element of x) {
    console.log(element);
}

// for loop with a condition and break
let a = [1, 2, 3, 4, 5];
// console log all elements in array a with a value of 3 or below
for(let x = 0; x < a.length;x++) {
    if (a[x] <= 3) {
        console.log(a[x]);
    } else {
        break;
    }
}

let a = ["a", "b", "c", "d"];

// console log every string in array a that is not equal to "c"
// continue skips one iteration of a loop
for(let x = 0; x < a.length;x++) {
    console.log(a[x]);

    if (a[x] === "c") {
        continue;
    }
}


// In class exercise, using while loop to print years old
let x = 10;
while(x < 18) {
    console.log(`You are ${x} years old!`);
    x++;
}

if (x === 18) {
    console.log('You are legally an adult!');
}


// Another way to complete exercise
while(x <= 18) {

    if (x === 18) {
        console.log("You are legally an adult");
        break;
    }

    console.log(`You are ${x} years old`);

    x++;
}

console.log("hello");

// Class exercise multiplication table
for(let x = 0; x <= 10; x++) {
    console.log(x * 3);
}

let x = 0;

while(x <= 10) {
    console.log(x * 3);
    x++;
}

for(let x = 0; x <= 10; x++) {
    for(let y = 0; y <= 10; y++) {
        console.log(x * y);
    }
}

// Another way to complete multiplication table exercise
let x = 0;
let y = 0;

while(x <= 10) {
    while(y <= 10) {
        console.log(x * y);
        y++;
    }

    y = 0;
    x++;
}

// In class exercise, printing class grades
for(let x = 0; x <= 100;x++) {
    if (x < 60) {
        console.log(x + " - " + "F");
    } else if (x < 70) {
        console.log(`${x} - D`);
    } else if (x <= 79) {
        console.log(`${x} - C`);
    } else if (x <= 89) {
        console.log(`${x} - B`);
    } else {
        console.log(`${x} - A`);
    }
}