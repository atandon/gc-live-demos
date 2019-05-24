document.getElementsByClassName()
document.querySelector()
document.addEventListener()

// Review of getElementById, getElementsByClassName, querySelector
const elem = document.getElementById("container");

elem.innerHTML = "<p>welcome</p>";

const elem = document.querySelector("#container");
console.log(elem);

const submitElems = document.getElementsByClassName("submit-btn");

const submitHandler = (e) => {
    console.log(e);
}

// Adding event listeners
submitElems[0].addEventListener("click", submitHandler);

// Creating an element
const divElem = document.createElement("div");
divElem.innerText = "hi!";
divElem.style.backgroundColor = "blue";

document.body.appendChild(divElem);

// document has a lot of other properties
document.links

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
    if (quantity > 10 || (inventory[itemName] - quantity) < 0) {
        return false;
    }

    cart[itemName] = cart[itemName] + quantity;
    inventory[itemName] = inventory[itemName] - quantity; // inventory["cookies"] = inventory["cookies"] - 2
    return true;
}

function removeFromCart(itemName, quantity) {
    if (cart[itemName] - quantity < 0) {
        return false;
    }
    cart[itemName] = cart[itemName] - quantity; // cart["cookies"] = cart["cookies"] - 1
    return true;
}

function getCart() {
    return cart;
}


const updateCartBtn = document.querySelector("#update-cart");

updateCartBtn.addEventListener("click", function() {
    const addOrRemove = document.querySelector("#add-or-remove").value;
    const quantity = document.querySelector("#quantity").value;
    const itemname = document.querySelector("#itemname").value;

    let wasSuccess;
    if (addOrRemove === "add") {
        wasSuccess = addToCart(itemname, parseInt(quantity));
    } else if(addOrRemove === "remove") {
        wasSuccess = removeFromCart(itemname, parseInt(quantity));
    }

    if (!wasSuccess) {
        alert("invalid!");
    }
});

const getCartBtn = document.querySelector("#get-cart");

getCartBtn.addEventListener("click", function() {
    const cart = getCart();
    alert(JSON.stringify(cart));
});


