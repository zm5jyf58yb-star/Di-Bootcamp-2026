const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    // 1. Calculate the standard ranking position (1, 2, 3, etc.)
    const position = index + 1;
    
    // 2. Use a ternary operator to pick the right suffix from the ordinal array
    const suffix = position <= 3 ? ordinal[position] : ordinal[0];
    
    // 3. Display the formatted string
    console.log(`${position}${suffix} choice is ${color}.`);
});
