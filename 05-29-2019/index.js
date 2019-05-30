
// Unit tests for numFunction
function numFunction() {
    return 1;
}

describe("numFunction", () => {

    it("should return one", function() {

        // when run numFunction() it should return 1
        expect(numFunction()).toBe(1);
    });

    // Do we really need to have this function?
    // No because we are not changing anything about the way this function runs from the previous
    // test
    it("should not return 2", function() {
        expect(numFunction()).not.toBe(2);
    });
});

// Testing add function
function add(num1, num2) {
    return num1 + num2;
}

describe("add(num1, num2)", () => {

    it("should add up 2 numbers and return the sum", function() {
        expect(add(4, 5)).toBe(9);
    });
});

// Testing isOddOrEven function
function isOddOrEven(num) {

    if (num === 3) {
        return "no";
    }

    // 5 % 2 = remainder 1
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Remember to test every scenario
// Good question to ask yourself is, am I covering every use case of this function?
// Is all my code being tested? Are we ignoring any if condition tests?
describe("isOddOrEven()", () => {

    it("should return the str 'odd' if the number passed in is odd", function() {
        const result = isOddOrEven(9);
        expect(result).toBe("odd");
    });

    it("should return the str 'even' if the number passed in is even", function() {
        const result = isOddOrEven(8);
        expect(result).toBe("even");
    });

    it("should return 'no' if the number passed in is 3", function() {
        const result = isOddOrEven(2);
        expect(result).toBe("no");
    });
});

// In Class Exercise - testing fullName function
function fullName(firstName, lastName) {
    if (firstName.length > 20 || lastName.length > 20 
        || firstName.length === 0) {
        return "error";
    }

    return `${firstName} ${lastName}`;
}

describe("fullName function", () => {

    it("should return the full name with correct inputs", function() {
        const result = fullName("John", "Wick");
        expect(result).toBe("John Wick");
    });

    it("should return 'error' when firstName is longer than 20 chars", function() {
        const result = fullName("thislineisdefinitely20charslong", "1");
        expect(result).toBe("error");
    });

    it("should return 'error' when lastName is longer tha 20 chars", function() {
        const result = fullName("1", "thislineisdefinitely20charslong");
        expect(result).toBe("error");
    });

    it("should return 'error' when firstName is empty", function() {
        const result = fullName("", "Wick");
        expect(result).toBe("error");
    });
});

// In class exercise: Testing add function
let values = [];

function add(val) {
    values.push(val);
    return values;
}

describe("add function", () => {

    it("should return one element in array when running add() once", function() {
        const result = add(1);
        expect(result).toEqual([1]);
    });

    it("should return two elements in array when running add() twice", function() {
        values = [];
        add(1);
        const result = add(2);
        expect(result).toEqual([1, 2]);
    });
});