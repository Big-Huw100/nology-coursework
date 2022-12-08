import {Triangle} from "./triangle.js";

describe("Tests to determine whether or not a shape entered is a triangle", () => {

    describe("Equilateral triangle", () => {
        test("All sides are equal", () => {
            const triangle = new Triangle(2, 2, 2);
            expect(triangle.isEquilateral).toBe(true);
        });

        test("No sides are equal", () => {
            const triangle = new Triangle(5, 4, 6);
            expect(triangle.isEquilateral).toBe(false);
        });
    })

    describe("Isoceles triangle", () => {
        test("Two sides are equal to eachother", () => {
            const triangle = new Triangle(2, 2, 3);
            expect(triangle.isIsoceles).toBe(true);
        });
    })

    describe("Scalene triangle", () => {
        test("All sides are different lengths", () => {
            const triangle = new Triangle(2, 3, 4);
            expect(triangle.isScalene).toBe(true);
        });

        test("All sides are different lengths", () => {
            const triangle = new Triangle(0.2, 0.3, 0.4);
            expect(triangle.isScalene).toBe(true);
        });
    })
});