// 1. Transform winBattle into a regular arrow function
const winBattle = () => {
    return true;
};

const experiencePoints = winBattle() ? 10 : 1;

// 3. Log the result to the console
console.log(experiencePoints);
