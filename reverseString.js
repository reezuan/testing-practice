function reverseString(str) {
    let string = str;

    if (typeof str === "number") {
        string = new String(str);
        string = string.toString();
    } else if (typeof str !== "number" && typeof str !== "string") {
        throw new Error("Parameter is not a string or number.");
    }
    
    const characters = string.split("");
    let newStringCharacters = [];

    for (let i = characters.length - 1; i >= 0; i--) {
        newStringCharacters.push(characters[i]);
    }

    return "".concat(...newStringCharacters);
}

export { reverseString }