class Calculator {

    add(num1, num2) {
        if (arguments.length > 2) {
            throw new Error("Only 2 parameters allowed.");
        } else if (arguments.length < 2) {
            throw new Error("2 parameters must be provided.");
        }
        
        if (
            typeof num1 !== "number" ||
            typeof num2 !== "number" ||
            Number.isNaN(num1) ||
            Number.isNaN(num2))
        {
            throw new Error("Parameters must either be an integer or floating point number.");
        }

        return num1 + num2;
    }

    subtract(num1, num2) {

    }

    divide(num1, num2) {

    }

    multiply(num1, num2) {
        
    }
}

export { Calculator }