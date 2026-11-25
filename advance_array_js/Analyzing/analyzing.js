const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

const country = "USA";
console.log([...country]);  //[ 'U', 'S', 'A' ]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);       //[ undefined, undefined ]