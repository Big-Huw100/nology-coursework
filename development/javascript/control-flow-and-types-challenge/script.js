const myNumber = 3;
if (myNumber >= 0) {
    console.log("It's a positive number")
} else {
    console.log("It's a negative number")
}

switch(new Date().getDay()) {
    case 0:
        console.log("It's already the weekend")
        break;
    case 1:
        console.log("4 days left...")
        break;
    case 2:
        console.log("3 days left...")
        break;
    case 3:
        console.log("2 days left...")
        break;
    case 4:
        console.log("1 days left...")
        break;
    case 5:
        console.log("0 days left...")
        break;
    case 6:
        console.log("4 days left...")
        break;
}

const vegetable = "carrot";
switch(vegetable) {
    case "potato":
    case "carrot":
        console.log("1.29 per kg")
        break;
    case "brocolli":
        console.log("1.5 per kg")
        break;
    case "cabbage":
        console.log("asparagus")
        break;
}