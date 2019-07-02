// file: ts-example.ts

// Typescript with array of strings
function getNames(names : string[]) {
    return names
}

console.log(getNames(["Jim", "john", "james"]));


// Interface for an object
interface Item {
    name: string
};

// Interface for the Cart class
interface Cart {
    addToCart(item: Item): number;
    removeFromCart(itemId: number): number;
}

// Implementing an interface using 'implements'
class ShoppingCart implements Cart {

    constructor(public items: string[] = []) {

    }

    addToCart(item: Item) {
        return 1;
    }

    removeFromCart(itemId: number) {
        return itemId;
    }

    private secretCartLogging() {

    }
}

const cart = new ShoppingCart();

// Interface for User object
interface UserInterface {
    id: number;
    firstName: string;
    lastName: string;
}

// Interface for User Registry class
interface UserRegistryInterface {
    addUser(user : UserInterface) : UserInterface;
    removeUser(id: number) : void;
}

// Implementing the User Registry class using 'implements'
class UserRegistry implements UserRegistryInterface {

    addUser(user : UserInterface) {
        return user;
    }

    removeUser(id : number) {
        
    }
}



let a : number = 3;

let b : string[] = ["a", "b", "c"];

interface User {
    firstName: string,
    lastName: string,
    age: number,
    isAlive: boolean
}

let user : User = {
    firstName: "Ajay",
    lastName: "Tandon",
    age: 29,
    isAlive: true
};

interface UserFactory {
    addUser(user: User) : User,
}

class UserFactoryImp implements UserFactory {
    public addUser(user: User) {
        // do something here
        return user;
    }

    private removeUser(userId: number) {
        this.removeUserDataFromCache();
        // do something here to remove user
    }

    private removeUserDataFromCache() {

    }
}

let d = new UserFactoryImp();
d.removeUserDataFromCache();