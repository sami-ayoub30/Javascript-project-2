//reverse a string//
var name = "John";
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(name));

//count characters in a string//
function countCharacters(str) {
  return str.length;
}
console.log(countCharacters(name));

//capitalize first letter of each word//
function capitalizeFirstLetter(str) {
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalizeFirstLetter("hello world"));

//finding maximum and minimum in an array//
var numbers = [3, 5, 1, 8, 2]; 
function findMaxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  };
} 
console.log(findMaxMin(numbers));

//sum of all numbers in an array// 
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}   
console.log(sumArray(numbers));

//filter array based on a condition//
function filterArray(arr, condition) {
  return arr.filter(condition);
} 
console.log(filterArray(numbers, num => num > 3));

//factorial of a number// 
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}   
console.log(factorial(5));

//prime number check//
function isPrime(num) {
  if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) return false;
    }
  return true;
} 
console.log(isPrime(7));