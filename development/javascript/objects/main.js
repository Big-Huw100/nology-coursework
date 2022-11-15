// Object Syntax
const exampleObject = {
    key : "value", // comma for other keys
    types : "any",
    method() {
        // Do something
        // this keyword is refer to the object
        return this.key + " " + this.types;
    }
};

// Access Objects

// Dot Notation
console.log(exampleObject.key);
console.log(exampleObject.types);

// Calling a Method
console.log(exampleObject.method());

// Square Brackets
console.log(exampleObject["key"]);
console.log(exampleObject["types"]);

// Adding a key to an object
exampleObject.newKey = "new value";

console.log(exampleObject);