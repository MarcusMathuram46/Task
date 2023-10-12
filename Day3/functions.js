// function is a block of statement which gets executed whenever we call it.
// reusability

// let a = 5;
// let b = 6;

// if (a < b) {
//     console.log(a, 'is the minimum value');
// } else {
//     console.log(b, 'is the minimum value');
// }

// a = 10;
// b = 7;

// if (a < b) {
//     console.log(a, 'is the minimum value');
// } else {
//     console.log(b, 'is the minimum value');
// }

// function findMinimum(a, b) {
//     if (a < b) {
//         console.log(a, 'is the minimum value');
//     } else {
//         console.log(b, 'is the minimum value');
//     }
// }

// let a = 5;
// let b = 6;

// findMinimum(a, b)

// a = 10;
// b = 7;

// findMinimum(a, b)

// function definition
// function greet(name) {
//     console.log('hello', name);
// }

// // function call
// greet('sathish');
// greet('krish');
// greet('prakash');

// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 6));

function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}

let sum = add(5, 6);
let product = multiply(5, 6);
console.log(sum, product);

