
const robots = [
  { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', image: 'https://robohash.org/1?200x200' },
  { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', image: 'https://robohash.org/2?200x200' },
  { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', image: 'https://robohash.org/3?200x200' },
  { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', image: 'https://robohash.org/4?200x200' },
  { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', image: 'https://robohash.org/5?200x200' },
  { id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', image: 'https://robohash.org/6?200x200' },
  { id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', image: 'https://robohash.org/7?200x200' },
  { id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/8?200x200' },
  { id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', image:'https://robohash.org/9?200x200' },
  { id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', image:'https://robohash.org/10?200x200' }
];

// Target UI layout selectors inside the DOM
const container = document.getElementById('robot-container');
const searchBox = document.getElementById('search-box');

// Function responsible for cleaning and outputting cards onto the viewport area
function renderCards(robotArray) {
    // Clear out the previous layout list before rebuilding
    //  Without this clearing line, new cards would continuously stack underneath old ones,
    //  cluttering  webpage with duplicate rows.

    container.innerHTML = "";

    // Build fresh nodes for arrays that match our search
    robotArray.forEach(robot => {
        const card = document.createElement('div'); // create card robot div
        card.classList.add('robot-card');           //with class 'robot-card'

        // Injecting Dynamic String Blueprints
        // To format  picture ,title, email
        card.innerHTML = `
            <img src="${robot.image}" alt="Robot ${robot.name}">
            <h2>${robot.name}</h2>
            <p>${robot.email}</p>
        `;
        container.appendChild(card);  //Mounting Elements onto the Web Page
    });
}

// Listen to every character change typed inside the input box tracker
searchBox.addEventListener('input', (event) => {
    // Standardize text strings to lower-case values to guarantee clear search match results
    const searchString = event.target.value.toLowerCase();

    // Use .filter to keep elements containing the typed search letters
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchString);
    });

    // Re-render the container using just the filtered subset
    renderCards(filteredRobots);
});

// Run initial execution display routine to print all 10 cards when your window mounts open
renderCards(robots);
