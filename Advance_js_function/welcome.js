(function(userName) {
    // 1. Find the navbar element using its ID
    var navbarElement = document.getElementById("navbar");
    
    // 2. Create the HTML string for the new div containing the text and profile image
    var userDiv = "<div>" +
                    "<span>Welcome, " + userName + "! </span>" +
                    "<img src='https://picsum.photos' alt='Profile Picture' style='border-radius: 50%; vertical-align: middle;'>" +
                  "</div>";
                  
    // 3. Add this new user div inside the navbar
    navbarElement.innerHTML = navbarElement.innerHTML + userDiv;
})("win");
