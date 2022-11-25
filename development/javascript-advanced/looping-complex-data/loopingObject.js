const validMessage = {
    userName : "Charlie",
    content : "Have a great day",
};

const invalidMessage = {
    userName : "Charlie",
    content : 4168168414,
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

console.log(validateMessageObject(validMessage));
console.log(validateMessageObject(invalidMessage));