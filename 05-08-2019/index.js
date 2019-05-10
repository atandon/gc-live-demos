// An array of different types
// Not best practice, always have an array of the same type
let x = ["name", 1, {}, function() {}];

function hasOne(a) {
    if (a == 1) {
        console.log("has 1");
    }
}

for(let i = 0;i < x.length;i++) {
    hasOne(x[i]);
}

// Adding a new element to the end of an array
let drinks = ["Coke", "Coffee", "Sweet tea"];

drinks[drinks.length] = "orange"; // index 3

console.log(drinks);

// setting a key/val in an object
// don't use numbers, use strings as keys
let o = {};
o[1] = 1;
console.log(o[1]);

// setting an object with a key of type string
let o = {};
o["test"] = 10;

console.log(o);

// deleted a key/val in an object
delete o.test;
console.log(o);

let a = {
    "b": 1
};

// Javascript methods
// Different types (string, arrays, objects, etc.)
// give you powerful methods out of box
// Examples:
let b = "hello";

// charAt gives you the character at the index provided
console.log(b.charAt(4));

let x = ["a", "b", "c", "d"];

// indexOf method
console.log(x.indexOf("d"));

let a = ["a", "b", "c", "e"];

// Splice methods for arrays
a.splice(3,0,"d");


console.log(a);

// Slice method for arrays
let a = ["a", "b", "c", "e"];
let b = a.slice(0, 2);

console.log(b);

// Map method for arrays
let a = [1,2,3,4,5];

// 1st way: map method using a function declarative
let b = a.map(function(val, indx) {
    return val + "-test";
});

// 2nd way: map method using an arrow function
let c = a.map((val, indx) => {
    return val + "-test";
})

// 3rd way: map method using a short hand arrow function
let d = a.map((val, indx) => val + "-test");

// 4th way: passing in a function to the map method
function mapperFunction(val, indx) {
    return val + "-test";
}

let e = a.map(mapperFunction);
console.log(b);

let x = [1,2,7,3,10,11,13,3,4,8,9,1];

// return an array of numbers with value <= 8

// Filter method for arrays
let a = x.filter(function(val, indx) {
    // return true, will add an element to array a
    // return false, will ignore the element
    return val <= 8;
});

console.log(a);

let a = [1, 9, 23, 749, 45, 455, 20];

// Find method for arrays
let b = a.find(function(val, indx) {
    return val === 749;
});

console.log(b);

// Values for array
let a = [1, 2, 5, 6, 7];
console.log(a.values());

// keys and values methods for objects
let o = {
    "h": 1,
    "b": 2,
    "c": 3
}

console.log(Object.keys(o));
console.log(Object.values(o));

// Filter method for arrays
let a = [1, 4, 3, 7, 2, 8, 11];
let b = a.filter(function(val) {
    return val%2 === 1;
});

// Short-hand way of using the filter method using arrow functions
console.log(a.filter((val) => val%2 === 1));

let a = {
    "name": "John",
    "id": 10,
    "password": "hello123",
    "region": "America"
};

// Setting the age in an object
a["age"] = 40;

// Deleting a key/val in an object
delete a["password"];

// Updating a key/val in an object
a["age"] = 42;
a["region"] = "Asia";







