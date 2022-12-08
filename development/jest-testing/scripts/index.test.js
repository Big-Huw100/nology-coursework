import {getName} from "./index.js";

it("Should return the string 'Sam, 22 years old.'", () => {
    const output = getName("Sam", 22);
    expect(output).toBe("Sam, 22 years old.");
})

it ("Should return the string 'Huw, 31 years old.'", () => {
    const output = getName("Huw", 32);
    expect(output).toBe("Huw, 32 years old.");
})