//**Challenge**

// 1. Write a function to find the perimeter of a rectangle

const calculatePerimeter = (width, height) => {
    return width + width + height + height;
}

console.log (calculatePerimeter (6,8));

// 2. Write a function to find the area of a circle. When given a radius, print the area to the console.

const calculateCircleArea = (radius) => {
    const area = Math.PI * (radius * radius);
    return area;
}

console.log (calculateCircleArea (10))

// 3. Write a function to fin the circumfrance of a circle

const calculateCircleCircumfrance = (radius) => {
    const circumfrance = (radius * 2) * Math.PI;
    return circumfrance;
}

console.log (calculateCircleCircumfrance (19))