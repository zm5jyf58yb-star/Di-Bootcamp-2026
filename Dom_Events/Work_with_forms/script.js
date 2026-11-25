// 1. Select the form and the <ul> elements from the DOM
const form = document.querySelector('form');
const usersAnswerList = document.querySelector('.usersAnswer');

// 2. Add the submit event listener to the form
form.addEventListener('submit', function(event) {
    
    // WHY event.preventDefault()? 
    // It prevents the browser from reloading the page, allowing JavaScript to handle the data.
    event.preventDefault();

    // 3. Retrieve the inputs by their name attributes
    const firstNameInput = document.querySelector('[name="firstname"]');
    const lastNameInput = document.querySelector('[name="lastname"]');
    // Extract the raw text values and remove outer white spaces
    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();

    // 4. Validation: Check that both inputs contain text
    if (firstNameValue === '' || lastNameValue === '') {
        alert('Please fill out both fields.');
        return; // Halt execution if validation fails
    }

    // 5. Place the valid entries into an array to cycle through them
    const inputValues = [firstNameValue, lastNameValue];

    inputValues.forEach(value => {
        // Create an individual <li> element for each value
        const li = document.createElement('li');
        
        // Add the input text to the element
        li.textContent = value;
        
        // 6. Append the finished <li> to the <ul class="usersAnswer"> below the form
        usersAnswerList.appendChild(li);
    });

    // 7. Clear the form inputs for the next entry
    form.reset();
});
