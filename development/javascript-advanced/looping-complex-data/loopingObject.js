const validMessage = {
    userName : "Charlie",
    content : "Have a great day",
};

const invalidMessage = {
    userName : "Charlie",
    error : 4168168414,
};

// for (let key in message) {
//     console.log(key);
//     console.log(message[key]);
// }

// Create a function that loops through a message object
// Check that all of the values are strings
// You will return true if they are and false otherwise

const validateMessageObject = (messageObject) => {
    for (let key in messageObject) {
        const typeCheck = typeof messageObject[key] !== "string";
        if (typeCheck) {
            return false
        }
    }
    return true;
};

// console.log(validateMessageObject(validMessage));
// console.log(validateMessageObject(invalidMessage));

const validMessageValues = Object.values(validMessage);
const invalidMessageValues = Object.values(invalidMessage);

// console.log(validMessage);
// console.log(invalidMessage);

// console.log(
//     validMessageValues.every((validMessage) => {
//     const typeCheck = typeof validMessage === "string";
//     return typeCheck;
//     })
// );

// console.log(
//     invalidMessageValues.every((validMessage) => {
//     const typeCheck = typeof validMessage === "string";
//     return typeCheck;
//     })
// );

const validMessageKeys = Object.keys(validMessage);
const invalidMessageKeys = Object.keys(invalidMessage);

console.log(validMessageKeys);
console.log(invalidMessageKeys);

// Write a function that will check the keys of a message object
// vaild keys -> ["userName", "content"]
// SO I want you to return true for valid and false for invalid

const validateMessageKeys = (messageObject) => {
    // GET THE KEYS
    const objectKeys = Object.keys(messageObject);
    // CHECK IF THEY ARE VALID
    const keyCheck = objectKeys.every(key => {
        const validKeys = ["userName", "content"];
        return validKeys.includes(key);
    })
    // RETURN THIS CHECK
    return keyCheck;
};

console.log(validateMessageKeys(validMessage));
console.log(validateMessageKeys(invalidMessage));