// 1. create a coaches array

const coaches = ["Andy", "Sam", "Bex"];
console.log(coaches[1]);

// 2. create an array of pets

const pets = ["Fido", "Rusty", "Jack"];
console.log(pets[2]);


// 3. create and array of numbers

const numbers = [1, 46, 69, 100];
console.log(numbers[2]);

// 4. create a sample for loop

// for (let i = 0; i < pets.length; i++) {
//     console.log(pets[i]);
// }

// for (let i = 0; i < coaches.length; i++) {
//     console.log(coaches[i]);
// }

// 5. create a forEach loop (a loop that is a lot easier to set up than the loop above)

pets.forEach((pet) => {
    console.log(pet);
})

coaches.forEach((coach) => {
    console.log(coach);
})

// 6. Use a map to prepend the word coach to each coach

const newCoaches = coaches.map((coach) => {
    return `Coach - ${coach}`;
})
console.log(newCoaches);

const newPets = pets.map((pet) => {
    return `Pets - ${pet}`;
})
console.log(newPets);

// 7. Use filter to remove a name from an array

const coachesFilter = coaches.filter((coach) => {
    if (coach.includes("e")) {
        return true;
    } else {
        return false;
    }
});

console.log(coachesFilter);

// 8. Below is a super simplfied version of using filter

const scores = [8, 9, 12];

const highScores = scores.filter((score) => score > 10);

console.log(highScores);
