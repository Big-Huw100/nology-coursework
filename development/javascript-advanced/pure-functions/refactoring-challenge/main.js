// const doesLotsOfThings = (firstName, lastName, birthday, arrayName) => {
//   const fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();
//   console.log(fullName);

//   const bday = new Date(birthday);
//   const diff = aDate.getTime() - bday.getTime();

//   let ms = 1000 * 3600 * 24;

//   const result = diff / ms;
//   console.log(result);

//   let myArray = [];
//   arrayName.forEach((item) => {
//     if (item.includes("Tech")) {
//       return myArray.push(item);
//     } else {
//       console.log("nope not tech");
//     }
//   });
// };

// const test = doesLotsOfThings("matt", "Bickell", "09/26/1993", [
//   "Tech is booming",
//   "Covid 19 yada yada yada",
//   "Economy due for a resurgance!",
//   "You can retrain in tech too!"
// ]);

const makeFullNameUpperCase = (firstName, lastName) => `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
console.log(makeFullNameUpperCase("huw", "williams"));

const findDaysSinceBirth = (birthday) => {
    const todaysDate = new Date("12/09/2022");
    const birthDate = new Date(birthday);

    const differenceInMs = todaysDate.getTime() - birthDate.getTime();
    const MSInDay = 1000 * 60 * 60 * 24;

    const numberOfDaysSinceBirth = Math.floor(differenceInMs / MSInDay);

    return `${numberOfDaysSinceBirth} days since birth`;
}

console.log(findDaysSinceBirth("03/26/1991"));

const findHeadlineIncludingTech = (headlineArr) => {
    const techHeadlineArr = headlineArr.filter((headline) => headline.toLowerCase().includes("tech"));
    return techHeadlineArr;
}

console.table(findHeadlineIncludingTech([
      "Tech is booming",
      "Covid 19 yada yada yada",
      "Economy due for a resurgance!",
      "You can retrain in tech too!"
    ]));