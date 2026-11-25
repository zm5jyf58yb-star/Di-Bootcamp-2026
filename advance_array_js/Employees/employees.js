const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// 1. Using map() to create a welcome message array
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log("Welcome Messages:", welcomeStudents);


// 2. Using filter() to grab only 'Full Stack Resident' objects
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log("Full Stack Residents:", fullStackResidents);


// 3. Bonus: Chaining filter() and map() together for last names
const fullStackLastNames = users
  .filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastName);

console.log("Full Stack Last Names:", fullStackLastNames);
