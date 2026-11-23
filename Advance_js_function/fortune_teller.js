(function(children, partner, location, job) {
    // 1. Combine the pieces of text together using standard string concatenation (+)
    var sentence = "You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids.";
    
    // 2. Find the body element of your HTML webpage
    var bodyElement = document.body;
    
    // 3. Insert the sentence inside a paragraph tag onto the page
    bodyElement.innerHTML = bodyElement.innerHTML + "<p>" + sentence + "</p>";
})(2, "Thant Zin Win", "Tel Aviv", "JavaScript Developer");
