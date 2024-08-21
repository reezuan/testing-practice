import { Calculator } from "../calculator.js";

let calculator = new Calculator();

test("creates a Calculator class object", () => {
    expect(calculator).toBeInstanceOf(Calculator);
});

// Add
test("adds two integers correctly", () => {
    expect(calculator.add(21, 63)).toBe(84);
});

test("adds two floating point numbers correctly", () => {
    expect(calculator.add(1.5, 3.4)).toBeCloseTo(4.9);
});

test("adds an integer & floating point number correctly", () => {
    expect(calculator.add(15, 4.8)).toBeCloseTo(19.8);
});

test("adds an integer & floating point number correctly", () => {
    expect(calculator.add(15, 4.8)).toBeCloseTo(19.8);
});

test("throws an error if more than 2 arguments are given", () => {
    expect(() => {
        calculator.add(1, 2, 3.65);
    }).toThrow("Only 2 parameters allowed.");
});

test("throws an error if less than 2 arguments are given", () => {
    expect(() => {
        calculator.add(100);
    }).toThrow("2 parameters must be provided.");
});

test("throws an error if either argument is not a number", () => {
    expect(() => {
        calculator.add("20", 6.9);
    }).toThrow("Parameters must either be an integer or floating point number.");

    expect(() => {
        calculator.add("eighty", 80);
    }).toThrow("Parameters must either be an integer or floating point number.");
});

test("throws an error if either argument is NaN", () => {
    expect(() => {
        calculator.add(NaN, 25);
    }).toThrow("Parameters must either be an integer or floating point number.");
});