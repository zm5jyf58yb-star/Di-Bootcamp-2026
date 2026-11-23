const isString = (value) => typeof value === 'string';

// Test examples:
console.log(isString('hello'));      // true
console.log(isString([1, 2, 4, 0])); // false
