import { capitalise } from "../capitalise.js";

test("capitalises first character of a string with a single word", () => {
    expect(capitalise("hello")).toMatch("Hello");
});

test("capitalises first character of a string with multiple words", () => {
    expect(capitalise("hello there")).toMatch("Hello there");
    expect(capitalise("hello there, how are you?")).toMatch("Hello there, how are you?");
});

test("returns an empty string if input is empty", () => {
    expect(capitalise("")).toMatch("");
});

test("doesn't modify strings with special characters", () => {
    expect(capitalise("?!?!")).toMatch("?!?!");
});

test("throws an error if input is a non-string type", () => {
    // Integer
    expect(() => {
        capitalise(1);
    }).toThrow("Parameter is not a string.");

    // Floating point number
    expect(() => {
        capitalise(2.34);
    }).toThrow("Parameter is not a string.");

    // Boolean
    expect(() => {
        capitalise(true);
    }).toThrow("Parameter is not a string.");

    expect(() => {
        capitalise(false);
    }).toThrow("Parameter is not a string.");

    // Null
    expect(() => {
        capitalise(null);
    }).toThrow("Parameter is not a string.");

    // Undefined
    expect(() => {
        capitalise(undefined);
    }).toThrow("Parameter is not a string.");

    // Array
    expect(() => {
        capitalise([]);
    }).toThrow("Parameter is not a string.");

    // Object
    expect(() => {
        capitalise({});
    }).toThrow("Parameter is not a string.");
});