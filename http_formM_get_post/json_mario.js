const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
};

// 1. Standard conversion to JSON string
const marioJSON = JSON.stringify(marioGame);

// 2. Pretty printed JSON string (using 2 spaces for indentation)
const marioPrettyJSON = JSON.stringify(marioGame, null, 2);

console.log(marioPrettyJSON);

// about ( Null )  
// By passing null, you are telling JavaScript:
// "I don't want to filter or change any data in my object. 
// Keep everything exactly as it is, 
// but skip to the next step so I can apply the indentation spaces."