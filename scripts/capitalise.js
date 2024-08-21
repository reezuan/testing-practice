function capitalise(str) {
    if (typeof str !== "string") {
        throw new Error("Parameter is not a string.")
    }
    
    const firstLetter = str.substring(0, 1).toUpperCase();
    
    return `${firstLetter}${str.substring(1)}`;
}

export { capitalise }