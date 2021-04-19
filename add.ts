function addNumbers(a: number, b: number, d?: number) {
  return a + b * d;
}

let sum: number = addNumbers(10, 15);

console.log('Sum of two numbers is: ' + sum);
