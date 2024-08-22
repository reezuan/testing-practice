class Calculator {

    #checkValidArguments(...numbers) {
        let args = [...numbers];

        if (args.length > 2) {
            throw new Error("Only 2 parameters allowed.");
        } else if (args.length < 2) {
            throw new Error("2 parameters must be provided.");
        }
        
        if (
            typeof args[0] !== "number" ||
            typeof args[1] !== "number" ||
            Number.isNaN(args[0]) ||
            Number.isNaN(args[1])
        ) {
            throw new Error("Parameters must either be an integer or floating point number.");
        }

        return true;
    }

    add(num1, num2) {
        if (this.#checkValidArguments(...arguments)) {
            return num1 + num2;
        }
    }

    subtract(num1, num2) {
        if (this.#checkValidArguments(...arguments)) {
            return num1 - num2;
        }
    }

    divide(num1, num2) {
        if (this.#checkValidArguments(...arguments)) {
            return num1 / num2;
        }
    }

    multiply(num1, num2) {
        if (this.#checkValidArguments(...arguments)) {
            return num1 * num2;
        }
    }
}

export { Calculator }