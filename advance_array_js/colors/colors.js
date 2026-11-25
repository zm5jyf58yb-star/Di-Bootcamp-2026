const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Loop through and display each choice
colors.forEach((color, index) => {
    console.log((index + 1) + "# choice is " + color + ".");
});

// 2. Check if "Violet" exists in the array
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}
