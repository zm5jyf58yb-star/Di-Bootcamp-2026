const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Combine all elements into a single space-separated sentence
const epicSentence = epic.reduce((accumulator, currentWord) => {
    return `${accumulator} ${currentWord}`;
});

console.log(epicSentence);
// Output: "a long time ago in a galaxy far far away"
