// 1. Let's do something with some headlines

// Use cammel casing for variables
let currentHeadline = "News in the world today"
const currentArticle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget mi eget purus laoreet tristique. Cras quis ex rhoncus, convallis est a, aliquet elit. Pellentesque id enim odio. Fusce vel suscipit lectus. Phasellus maximus non ex venenatis hendrerit. Suspendisse tempor ligula eget velit ornare, quis pellentesque augue dapibus. Nulla facilisis erat a nulla suscipit, quis commodo nibh posuere. Suspendisse finibus, risus quis efficitur faucibus, purus orci congue justo, eget ullamcorper diam lectus non mi. Nullam vel quam leo. Vestibulum a ullamcorper massa, vel euismod nunc. Aenean dignissim rutrum tortor. Nam aliquam enim sem, tincidunt suscipit enim aliquet eget. Sed aliquam, nunc ac consequat imperdiet, neque tellus fringilla mauris, in ullamcorper lorem odio vitae nibh. Lorem ipsum dolor sit amet."

// Use has for boolean and amountOf for number
const hasPassedTest = true;
const amountOfWords = 957;

// 2. Before we start we need to make sure the headline isn't too long
if (currentHeadline.length > 15) {
    currentHeadline = currentHeadline.substring(0, 15) + "...";
}

// 3. Show it to the user
console.log("Nology Post 2021")
console.log("Headline: " + currentHeadline)
console.log(currentArticle);


// 4. Example of a meaningful function name.. getData() is vague :( getPost is more meaningful :)
    function getPost() {
        // Ger your post in here..
    }

