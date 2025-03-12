// Hoisting in JavaScript means that all the variables and function declarations are moved to the top of their
// containing scope during the compile phase.

// There are 2 types of hoisting in JavaScript:
// 1. Variable Hoisting
// 2. Function Hoisting
// 3. let and const hoisting

// 1. Variable Hoisting: Variables are hoisted to the top of their containing scope during the compile phase. However,
// only the declaration is hoisted and not the initialization.
// Example:
console.log(x);   // o/p: undefined
var x;   // declaration
// We declared x after the console.log() statement but still it is not throwing any error unlike other programming languages.
// It is properly showing the output as undefined. It is because of hoisting. The declaration of x is hoisted to the top of
// the scope during the compile phase. However, the initialization is not hoisted. So, even if we initialize x (eg: var x = 10;),
// it will still show the output as undefined.

// 2. Function Hoisting: Functions are hoisted to the top of their containing scope during the compile phase.
// Example:
greet();
function greet() {
    console.log("Hello world");
}
// We declared the function greet() after the greet() function call but still it is not throwing any error unlike other
// programming languages. It is properly showing the output as "Hello world". It is because of hoisting. The function greet()
// is hoisted to the top of the scope during the compile phase.

// 3. let and const hoisting: let and const are also hoisted to the top of their containing scope during the compile phase.
// However, the difference is that they are not initialized with undefined. So, if we try to access them before their
// declaration, it will throw an error. This is because they are in a "temporal dead zone" from the start of the block until
// the declaration is encountered.
// Example:
console.log(y);   // ReferenceError: Cannot access 'y' before initialization
let y;   // declaration
// We declared y after the console.log() statement and it is throwing an error because let and const are not initialized with
// undefined. So, if we try to access them before their declaration, it will throw an error.
