function isAnagram(first, second) {
    // Helper function to clean, sort, and normalize the string
    const cleanString = (str) => {
        return str
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '') // Remove spaces and punctuation
            .split('')                 // Split into individual characters
            .sort()                    // Sort alphabetically
            .join('');                 // Join back into a string
    };

    // Compare the two cleaned and sorted strings
    return cleanString(first) === cleanString(second);
}
console.log(isAnagram("Astronomer", "Moon starer"));     
console.log(isAnagram("School master", "The classroom")); 
console.log(isAnagram("The Morse Code", "Here come dots"));