"use strict";
// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop
{
    function sum_of_even_number(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += 2 * i;
        }
        return sum;
    }
    let n = 5;
    let result = sum_of_even_number(n);
    console.log(result);
}
// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
{
    let num = [1, 4, 5, 9, 23, 12, 23.5, 18, 66, 56, 19];
    for (let number of num) {
        if (number % 2 == 0) {
            console.log(number);
        }
    }
}
// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
{
    let num = [12, 23, 14, 53, 19, 43, 56, 26, 29, 31, 20];
    for (let number of num) {
        if (number % 2 != 0) {
            console.log(number);
        }
    }
}
// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
{
    function area_Of_Circle(radius) {
        let area = 3.14 * radius ** 2;
        return area;
    }
    const radius = 12;
    let result = area_Of_Circle(radius);
    console.log("The area of circle is", result);
}
// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
{
    function failingMarks(grades) {
        for (let i = grades.length - 1; i >= 0; i--) {
            if (grades[i] < 50) {
                grades.splice(i, 1);
            }
        }
        return grades;
    }
    const gradesList = [75, 42, 65, 30, 75, 40, 35, 100];
    const passingGrades = failingMarks(gradesList);
    console.log("Passing grades:", passingGrades);
}
// write a program that reads a list of grades and uses a function to find the largest element of an array
function findLargestElement(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
const numberArray2 = [15, 90, 45, 64, 143, 130, 521];
const largestElement = findLargestElement(numberArray2);
console.log(largestElement);
