const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

// 1. Using filter() to grab only the students who passed
const passingStudents = students.filter(student => student.isPassed === true);
console.log("Passed Students Array:", passingStudents);


// 2. Bonus: Chaining filter() with forEach() to print dynamic congratulations messages
students
  .filter(student => student.isPassed === true)
  .forEach(student => {
      console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });
