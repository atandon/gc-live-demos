// // file: ts-example.ts
// // function getNames(names : ) {
// //     return names
// // }
// // console.log(getNames(["Jim", "john", "james"]));
// interface Item {
//     name: string
// };
// interface Cart {
//     addToCart(item: Item): number;
//     removeFromCart(itemId: number): number;
// }
// class ShoppingCart implements Cart {
//     constructor(public items: string[] = []) {
//     }
//     addToCart(item: Item) {
//         return 1;
//     }
//     removeFromCart(itemId: number) {
//         return itemId;
//     }
//     private secretCartLogging() {
//     }
// }
// const cart = new ShoppingCart();
// interface UserInterface {
//     id: number;
//     firstName: string;
//     lastName: string;
// }
// interface UserRegistryInterface {
//     addUser(user : UserInterface) : UserInterface;
//     removeUser(id: number) : void;
// }
// class UserRegistry implements UserRegistryInterface {
//     addUser(user : UserInterface) {
//         return user;
//     }
//     removeUser(id : number) {
//     }
// }
var a = 3;
var b = ["a", "b", "c"];
var user = {
    firstName: "Ajay",
    lastName: "Tandon",
    age: 29,
    isAlive: true
};
var UserFactoryImp = (function () {
    function UserFactoryImp() {
    }
    UserFactoryImp.prototype.addUser = function (user) {
        // do something here
        return user;
    };
    UserFactoryImp.prototype.removeUser = function (userId) {
        this.removeUserDataFromCache();
        // do something here to remove user
    };
    UserFactoryImp.prototype.removeUserDataFromCache = function () {
    };
    return UserFactoryImp;
})();
var d = new UserFactoryImp();
d.removeUserDataFromCache();
