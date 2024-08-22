import { Calculator } from "../calculator.js";

let calculator = new Calculator();

test("creates a Calculator class object", () => {
    expect(calculator).toBeInstanceOf(Calculator);
});

test("adds two integers correctly", () => {
    expect(calculator.add(21, 63)).toBe(84);
});

test("subtracts two integers correctly", () => {
    expect(calculator.subtract(50, 30)).toBe(20);
});

test("adds two floating point numbers correctly", () => {
    expect(calculator.add(1.5, 3.4)).toBeCloseTo(4.9);
});

test("subtracts two floating point numbers correctly", () => {
    expect(calculator.subtract(54.3, 39.2)).toBeCloseTo(15.1);
});

test("adds an integer & floating point number correctly", () => {
    expect(calculator.add(15, 4.8)).toBeCloseTo(19.8);
});

test("subtracts an integer & floating point number correctly", () => {
    expect(calculator.subtract(20, 1.5)).toBeCloseTo(18.5);
    expect(calculator.subtract(15.5, 4.5)).toBeCloseTo(11);
});

test("throws an error if more than 2 arguments are given", () => {
    expect(() => {
        calculator.add(1, 2, 3.65);
    }).toThrow("Only 2 parameters allowed.");

    expect(() => {
        calculator.subtract(3, 4, 6.57);
    }).toThrow("Only 2 parameters allowed.");
});

test("throws an error if less than 2 arguments are given", () => {
    expect(() => {
        calculator.add(100);
    }).toThrow("2 parameters must be provided.");

    expect(() => {
        calculator.subtract(200);
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

    expect(() => {
        calculator.subtract(100, NaN);
    }).toThrow("Parameters must either be an integer or floating point number.");
});