const user = {
    id: "fv65fv65bf65bf",
    loggedIn: true,
    information: {
        firtName: "charlie",
        lastName: "richardson",
        age: 30,
        likes: ["cycling", "disco", "coding"]
    },
    contact: {
        email: "charlie@charlie.co.uk",
        contactNumber: "01443813099",
        address: {
            houseNuber: 12,
            nameOfRoad: "electric avenue",
            postcode: "cf827sn",
            country: "uk"
        }
    }
};

const userTwo = {
    id: "fv65fv65bf65bf",
    loggedIn: true,
    information: {
        firtName: "charlie",
        lastName: "richardson",
        age: 30,
        likes: ["cycling", "disco", "coding"]
    },
    contact: {
        email: "charlie@charlie.co.uk",
        contactNumber: "01443813099",
        address: {
            houseNuber: 12,
            nameOfRoad: "electric avenue",
            postcode: "cf827sn",
            country: "uk"
        }
    }
};

// How to get contact number
console.log(user.contact.contactNumber);

// How to get age
console.log(user.information.age);

// How to get country
console.log(user.contact.address.country);

// How to get all constact info
console.log(user.contact);

// How to get list of likes
console.log(user.information.likes)

// How to get singular like
console.log(user.information.likes[2]);

const userArray = [user, userTwo];

userArray.forEach(user => {
    console.log(user.information.likes);
});