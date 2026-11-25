const gameInfo = [
 { username: "john", team: "red", score: 5, items: ["ball", "book", "pen"] },
 { username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
 { username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
 { username: "tyson", team: "green", score: 1, items: ["book", "pen"] },
];

// ==========================================
// 1. Usernames Array with "!"
// ==========================================
const usernames = [];

gameInfo.forEach(player => {
    usernames.push(`${player.username}!`);
});

console.log("Usernames with exclamation:", usernames); 
// Output: ["john!", "becky!", "susy!", "tyson!"]


// ==========================================
// 2. Winners Array (Score > 5)
// ==========================================
const winners = [];

gameInfo.forEach(player => {
    if (player.score > 5) {
        winners.push(player.username);
    }
});

console.log("Winners list:", winners); 
// Output: ["becky", "susy"]


// ==========================================
// 3. Calculating the Total Score
// ==========================================
let totalScore = 0; // Initialize a counter variable

gameInfo.forEach(player => {
    totalScore += player.score; // Add each player's score to the counter
});

console.log("Total Score of all players:", totalScore); 
// Output: 71
