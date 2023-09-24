// let age: number;

// age = 12

// let userName: string;

// userName= "Max";

// let isInstructor: boolean;

// isInstructor = true;

// let hobbies: null;

// hobbies = "steve";

let hobbies: string[];

hobbies = ['cooking', 'sports'];

type Person = {
    name: string;
    age: number;
};

let person: Person

person = {
    name: 'Max',
    age: 27
}

// person = {
//     isEmployee: true
// };

let people: Person[];

let course: string | number ='React - The Complete Guide';

course = 1234;

// Functions and Types

function add(a: number, b: number){
    return a + b;
}

function printOutput(value: any){
    console.log(value);
}

//Generics

function insertAtBegininning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;

}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBegininning(demoArray, -1);
const stringArray = insertAtBegininning(['a', 'b', 'c'], 'd')

//updatedArray[0].split('');

//Classes and Interfaces