/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

//function addTwoNumbers(a, b) {
//return a + b;
//}
//let sum = addTwoNumbers(3, 5);
//console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;

let sum2 = addTwoNumbers2(4, 6);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello There!!!')

const sayHello = () => console.log('Hello');
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiline string
    </p>`
)
console.log(returnMultipleLines());

//Arrow Function Challenge
//Use following data to return an average mark of a subject using an arrow function

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

// 1. const averagePoints = (arr, subject) => {...} 
//declares an arrow function named averagePoints that takes an array arr and a string subject as parameters.
const averagePoints = (arr, subject) => {
// 2. let totalPoints = 0; and let totalStudents = 0; 
//initialize variables to keep track of the total points and the number of students.
    let totalPoints = 0;
    let totalStudents = 0;

// 3. arr.forEach(student => {...}); iterates through each student in the array.
    arr.forEach(student => {
// 4. if (student.results[subject]) {...} 
//checks if the student has a result for the specified subject. If they do, it proceeds to calculate.
        if (student.results[subject]) {
// 5. totalPoints += student.results[subject]; adds the points for the subject to the total.
            totalPoints += student.results[subject];
// 6. totalStudents++; increments the count of students who have a result for the subject.
            totalStudents++;
        }
    });
// 7. After iterating through all students, it checks if totalStudents is 0 to avoid division by zero. If it is, it returns 0.
    if (totalStudents === 0) {
        return 0; // To avoid division by zero
    }

    return totalPoints / totalStudents;
};

let averageMarks = averagePoints(students, 'english');

console.log(averageMarks);

