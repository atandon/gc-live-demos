

// Creating a Class Constructor
class Book {

    constructor(title) {
        // Setting a class property
        this.title = title;
        console.log(title);
    }

    getBookTitle() {
        // Returns the class property
        return this.title;
    }
}

// initialize Book class
const book = new Book("Grapes of Wrath");

console.log(book);
console.log(book.getBookTitle());


// Creating an Object Literal
const book = {
    "title": "Grapes of Wrath",
    "getBookTitle": function() {
        return this.title;
    }
};

// Dot notation v bracket notation for getting values from an Object literal
const key = "title";
console.log(book[key]);
console.log(book.key); // book["key"]


// Extending classes
// Basketball inherits Sport
// Basketball now has all the properties and methods of Sport + its own methods/properties
class Sport {

    constructor(name) {
        this.name = name;
    }

    getSportName() {
        return this.name;
    }
}

// const sport = new Sport("Basketball");

class Basketball extends Sport {
    constructor() {
        super("Basketball"); // new Sport("Basketball")
    }
}

const basketball = new Basketball();
console.log(basketball.getSportName());


