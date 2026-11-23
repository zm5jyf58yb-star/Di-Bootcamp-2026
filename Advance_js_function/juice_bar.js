// Outer function
function makeJuice(size) {
    // 1. Create an empty array named ingredients
    var ingredients = [];

    // 2. Inner function to add 3 ingredients at a time into the array
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1);
        ingredients.push(ingredient2);
        ingredients.push(ingredient3);
    }

    // 3. New inner function to read the array and display the final sentence
    function displayJuice() {
        var sentence = "The client wants a " + size + " juice, containing ";
        
        // Loop through the ingredients array to construct the sentence smoothly
        for (var i = 0; i < ingredients.length; i++) {
            sentence = sentence + ingredients[i];
            
            // Add a comma after each ingredient, except for the very last one
            if (i < ingredients.length - 1) {
                sentence = sentence + ", ";
            }
        }
        sentence = sentence + ".";

        // Display the sentence on the web page DOM
        document.body.innerHTML = document.body.innerHTML + "<p>" + sentence + "</p>";
    }

    // 4. Invoke addIngredients TWICE to collect 6 total ingredients
    addIngredients("apple", "ginger", "carrot");
    addIngredients("lemon", "mint", "cucumber");

    // 5. Invoke displayJuice ONCE to print the order
    displayJuice();
}

// 6. Invoke makeJuice in the global scope
makeJuice("large");
