import { reverseString } from "../reverseString.js";

test("reverses a string with a single word", () => {
    expect(reverseString("Cats")).toBe("staC");
});

test("reverses a string with multiple words", () => {
    expect(reverseString("Cats are the best!")).toBe("!tseb eht era staC");
});

test("reverses a sequence of numbers", () => {
    expect(reverseString(12345)).toBe("54321");
});

test("reverses a floating point number", () => {
    expect(reverseString(1.234)).toBe("432.1");
});

test("reverses a sequence of special characters", () => {
    expect(reverseString("!@#$%")).toBe("%$#@!");
});

test("throws an error if input is not a string or number", () => {
    // Boolean
    expect(() => {
        reverseString(false);
    }).toThrow("Parameter is not a string or number.");

    // Array
    expect(() => {
        reverseString([1, "hello", true]);
    }).toThrow("Parameter is not a string or number.");

    // Object
    expect(() => {
        reverseString({one: 1, two: 2});
    }).toThrow("Parameter is not a string or number.");

    // Null
    expect(() => {
        reverseString(null);
    }).toThrow("Parameter is not a string or number.");

    // Undefined
    expect(() => {
        reverseString(undefined);
    }).toThrow("Parameter is not a string or number.");
});