
// console.log('Happy developing ✨') // this is a print command
//
// const num = 43 // Number
// const lecturierName = 'Nitzan Goldenberg' // string
// const isStudent = false // boolean
//
// const personalInfo = {
//     firstname: 'Nitzan',
//     lastname: 'Goldenberg',
//     age: '43',
//     isStudent: false,
//
// }
//
// function tryMe() {
//     return "i am a function"
// }
//
// console.log('Object:', personalInfo.firstname)
// console.log('function:', tryMe())
// console.log('String:', lecturierName)
//
// let number = 10
//
// number += 2
//
// console.log('original number: 10 Results:', number)
//
// const age = 21
// const isStudent = true
//
//
// const canDrink = (age>=21) && isStudent
// console.log('age:', age)

// function  greetByName (name) {
//     return 'Hello, ' + name + '!'
// }
// console.log(greetByName('Nitzan'))

function regularFunction(number){
    return number+5
}
const arrowFunction = (number) => {
    return number+5;
}
const arrowFunction2 = (number) => number+5;

console.log('this is a regular function: ',regularFunction(4));
console.log('this is an arrow function: ',arrowFunction(10));
console.log('this is the new arrow function: ',arrowFunction2(5));