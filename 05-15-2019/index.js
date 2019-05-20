// How to use spread
function getUser(firstName, lastName, age) {
    console.log(firstName, lastName, age);
}

const userData = ["Ajay", "Tandon", 29, "A"];

// Spread is used in an argument
getUser(...userData);

// Rest parameter

function sumNums(...nums) {
    console.log(nums);
}

sumNums(20, 9, 10, 11, 12);

Destructuring
const user = {
    "firstName": "Ajay",
    "lastName": "Tandon",
    "age": 29
};

let fn = user["firstName"];
let ln = user["lastName"];

let { firstName, lastName } = user;

let a = {
    "b": 1,
    "c": 2
};

let b = { ...a };

a["b"] = 10;

console.log(a);
console.log(b);

let a = [1,2,3];
let b = [...a];

console.log(a, b);

let d = {
    "a": {
        "d": 1,
        "e": 2
    }
}

var a = [1, 2, 3, 4]
for(let index=0;i<10;i++) {
    a[index]
}


function() {
    let a = 2;
}

function() {
    let a = 3;
}


// Immediately invoked functions
// Great to avoid global scope
(function() {
var a = 1;
})();

for(let i=0;i < 10;i++) {
let o = 2;
        let e = 5;
}

function runme() {
    return;

}

// Shopping Cart In Class Exercise
let inventory = {
    "cookies": 10,
    "chips": 10,
    "beer": 10,
    "milk": 10,
    "apples": 10
};

let cart = {
    "cookies": 0,
    "chips": 0,
    "beer": 0,
    "milk": 0,
    "apples": 0
};

function addToCart(itemName, quantity) {
    // update my cart to the quantity given

    if (quantity > 10 || (inventory[itemName] - quantity) < 0) {
        return;
    }
    
    cart[itemName] = cart[itemName] + quantity;
    inventory[itemName] = inventory[itemName] - quantity; // inventory["cookies"] = inventory["cookies"] - 2
    
    // cart["cookies"] = cart["cookies"] + 2 => 2
    // cart["cookies"] = cart["cookies"] + 3 => 5
}

function removeFromCart(itemName, quantity) {

    if (cart[itemName] - quantity < 0) {
        return;
    }
    cart[itemName] = cart[itemName] - quantity; // cart["cookies"] = cart["cookies"] - 1
}

function getCart() {
    return cart;
}

items = [{"beer": 2}, {"chips": 3}, {"beer": 2}]

    for
        1st iteration: items[0]  i = 0
            2nd iteration: items[1] i = 1
                // 3rd iteration: items[2] i = 2
function addManyToCart(...items) {
    for(let i=0; i < items.length;i++) {
        // items = [{}, {}, {}]

        const { itemName, quantity } = items[i]; // destructuring


        console.log(items[i]);
        addToCart(itemName, quantity);
        // for in
            // 1st iteration: key = beer, 2
                // 2nd iteration: key = chips, 3
                    // 3rd iteration key = beer, 2
        // for(let key in items[i]) {
        //     let itemName = key;

        //     // items[i] = {"beer": 2}
        //     // items[i][key] => items[0]["beer"]
        //     let quantity = items[i][key];
        //     addToCart(itemName, quantity);
        // }
    }
}

const items = {
  itemName: "beer",
  quantity: 2
}

addManyToCart({
    itemName: "beer"
});
console.log(getCart());



addToCart("cookies", 2);  // itemName="cookies", quantity=2
addToCart("cookies", 3);  // itemName="cookies", quantity=3
addToCart("cookies", 6);

addToCart("cookies", 2);
removeFromCart("cookies", 3);

let c = getCart();
console.log(c);


function item() {

}

function apple() {
    // based on item()
}

function inventory() {
    // many items();

}

function cart() {

}

function groceryStore() {
    // many cart();
    // one inventory();

}



Primitives

- Numbers
- Strings
- Booe


class Cart {

    constructor(numItems) {
        this.numItems = numItems;
    }

    addToCart(itemName, quantity) {
        console.log(itemName, quantity);
    }

    addManyToCart(itemName, quantity, itemNameTwo, quantityTwo) {
        this.addToCart(itemName, quantity);
        this.addToCart(itemNameTwo, quantityTwo);
    }
}

// initialization of Cart class => object
let cart = new Cart(10);

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getLocation() {
        return "Detroit";
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, employeeId) {
        super(firstName, lastName, age); // Person(firstName, lastName, age);
        this.employeeId = employeeId;
    }
}

const person = new Person("Ajay", "Tandon", 29);
console.log(person);
console.log(person.getLocation());

const employee = new Employee("Ajay", "Tandon", 29, 123);
console.log(employee.getLocation());