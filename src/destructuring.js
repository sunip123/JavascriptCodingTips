const person = {
    name : 'Sujit',
    age : 26,
    company : 'Apple',
        education: {
            college : 'RCET R1',
        },
};

//  simple code in js 
{/*
const name = person.name;
const age = person.age;
*/}

// with destructuring 
const  { name, age } = person;
console.log("--------- destructuring ---------------");
console.log(name);
console.log(age);

// nested properties destructuring 
const { education : { college } }  = person;
console.log("--------------- nested properties for destructruing ----------");
console.log(college);

// creating name aliases 
const { name : username } = person;
console.log("------- name aliases -------------");
console.log(username);

console.log("------- swapping two or more variables -------------");
// swapping two or more variables
let a = 0;
let b = 1;
let c = 2;

console.log(a, b, c );
// now swap the values
[a, b, c] = [b, c, a];
console.log("-------------- swapped variables ----------");
console.log(a, b, c);



























