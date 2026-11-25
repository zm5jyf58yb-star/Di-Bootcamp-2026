// 1. Declare a global variable named allBoldItems
let allBoldItems;

// 2. Collect all <strong> tags inside the paragraph and assign them to the global variable
function getBoldItems() {
    allBoldItems = document.querySelectorAll('#target-paragraph strong');
}

// 3. Create a function called highlight() that changes the text color to blue
function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    });
}

// 4. Create a function called returnItemsToDefault() that changes the text color back to black
function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    });
}

// ==========================================
// INITIALIZATION AND EVENT LISTENERS
// ==========================================

// Run the collector function first so allBoldItems is populated with the elements
getBoldItems();

// Select the paragraph container
const paragraph = document.getElementById('target-paragraph');

// Call highlight() on mouseover (when the pointer enters the paragraph)
paragraph.addEventListener('mouseover', highlight);

// Call returnItemsToDefault() on mouseout (when the pointer leaves the paragraph)
paragraph.addEventListener('mouseout', returnItemsToDefault);
