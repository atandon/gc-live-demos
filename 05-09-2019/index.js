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



// addToCart("cookies", 2);  // itemName="cookies", quantity=2
// addToCart("cookies", 3);  // itemName="cookies", quantity=3
// addToCart("cookies", 6);

addToCart("cookies", 2);
removeFromCart("cookies", 3);

let c = getCart();
console.log(c);



// Scope
let a = 1;
let b = 2;
let a = 1;

function test() {
    let b = 2;

    function testtwo() {
        let c = 3;
    }
}

console.log(c);
test();


// Hoisting best practice
// Always declare your variables at the top of your function
function getName() {
    const firstName = "A";
    const age = 22;
    const lastName = "B";
}


// Hoisting, how you write your code and how the computer interprets your code

// this is what is written
function getName() {
    console.log("1");
    let b = 2;
}

// this is how your computer interprets what you wrote
function getName() {
    let b; // declaring
    console.log("1");
    b = 2; // assigning
}


// Encapsulation using closures
// Closures are essentially functions inside functions
function apple() {
    const name = "apple";

    function orange() {
        return name;
    }

    return orange(); 
}

console.log(apple());

// The power of closures and encapsulation
function car(name) {
    let properties = {
        "color": null,
        "numDoors": 4
    };

    const a = function() {
        properties[name] = name;
        return properties;
    }

    return a;
}

// car -> ford -> f150


let audi = car("audi");
console.log(audi);