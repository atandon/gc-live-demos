
// Why use classes?
// Because you don't repeat yourself, its great for testing
const getFullName = function() {
    return this.firstName + " " + this.lastName;
};

const userBob = {
    "firstName": "Bob",
    "lastName": "Rickter",
    age: 20,
    getFullName: getFullName
};

const userSam = {
    "firstName": "Sam",
    "lastName": "Sailor",
    age: 30,
    getFullName: getFullName
};

const userTim = {
    "firstName": "Tim",
    "lastName": "Tiller",
    age: 40,
    getFullName: getFullName
};


class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

let userbob = new User("Bob", "Rickter", 20);
let usersam = new User("Sam", "Sailor", 30);
let usertim = new User("Tim", "Tiller", 40);


// Extending User
// Admin inherits getFullName()
class Admin extends User {

    constructor(firstName, lastName, age) {
        super(firstName, lastName, age); 
    }
}

// I create a new Admin
        // automatically also create a user and the admin object inherits
        // all the methods of user

const admin = new Admin("Tim", "Tiller", 30);
console.log(admin.getFullName());