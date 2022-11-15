// // Object Syntax
// const exampleObject = {
//     key : "value", // comma for other keys
//     types : "any",
//     method() {
//         // Do something
//         // this keyword is refer to the object
//         return this.key + " " + this.types;
//     }
// };

// // Access Objects

// // Dot Notation
// console.log(exampleObject.key);
// console.log(exampleObject.types);

// // Calling a Method
// console.log(exampleObject.method());

// // Square Brackets
// console.log(exampleObject["key"]);
// console.log(exampleObject["types"]);

// // Adding a key to an object
// exampleObject.newKey = "new value";

// console.log(exampleObject);

const studentContainer = document.querySelector(".students-container");

const person = {
    firstName: "Huw",
    lastName: "Williams",
    quote: "It's what we do with the gift of life that determins who we are",
    skills: ["HTML", "CSS", "Javascript"],
    imgURL: "https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/288020499_10161560298226756_2295376958204827870_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=8jlh0fKAnAEAX_0JRB3&_nc_ht=scontent-man2-1.xx&oh=00_AfA6H920aViQDcyTGLiXnbtYHX9dCHFMh-sB0IRkXUxUfA&oe=6377DFA0",
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    getSkillList() {
        const skillList = this.skills.map(skill => `<li>${skill}</li>`)
        console.log(skillList);
        return skillList.join("\n");
    },
    getPersonHTML() {
        const personHTML = `
        <article class="student-card">
            <img src=${this.imgURL} />
            <h2>${this.getFullName()}</h2>
            <blockquote>${this.quote}</blockquote>
            <h3>Skills</h3>
            <ul>${this.getSkillList()}</ul>
        </article>
        `
        return personHTML;
    }
};

studentContainer.innerHTML = person.getPersonHTML();

person.age = 31;
