/**
 * WHAT IS AN IIFE?
 * It consists of two main parts:
 * 1. The grouping operator `()` which turns a standard function declaration into a function expression.
 * 2. The final `()` which immediately invokes (calls) the function.
 */

// ==========================================
// 1. THE BASIC SYNTAX
// ==========================================

// Standard anonymous IIFE
(function () {
    const localMessage = "I am trapped inside this IIFE!";
    console.log(localMessage); 
})();

// console.log(localMessage); // ReferenceError: localMessage is not defined


// Arrow Function IIFE (Modern Syntax)
(() => {
    console.log("Arrow function IIFE executed!");
})();


// ==========================================
// 2. PASSING ARGUMENTS INTO AN IIFE
// ==========================================
// You can pass variables from the outside world into the IIFE via the trailing parentheses.
(function (name, age) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
})("Narendra", 20); 


// ==========================================
// 3. RETURNING VALUES FROM AN IIFE
// ==========================================
// An IIFE can compute something immediately and assign the returned value directly to a variable.
const doubleTheNumber = (function (num) {
    return num * 2;
})(5);

console.log(doubleTheNumber); // 10


// ==========================================
// 4. HISTORICAL USE CASE: THE MODULE PATTERN
// ==========================================
// Before modern ES modules (import/export), IIFEs were the only way to create 
// private and public access states in JavaScript libraries (like older versions of jQuery).
const sampleModule = (function () {
    let privateCounter = 0; // Completely hidden variable

    function privateMethod() {
        console.log("Accessing private logic...");
    }

    return {
        // Only what is returned here is accessible to the outside world
        publicIncrement: function () {
            privateCounter++;
            privateMethod();
            return privateCounter;
        }
    };
})();

console.log(sampleModule.publicIncrement()); // Logs "Accessing private logic..." then returns 1
// console.log(sampleModule.privateCounter); // undefined


// ==========================================
// 5. ASYNC IIFE (Very useful in modern JS)
// ==========================================
// Top-level `await` is supported in modern environments, but wrapping code inside 
// an async IIFE remains a standard approach to run asynchronous setup code cleanly.
(async () => {
    try {
        console.log("Fetching config data...");
        // const data = await fetch('https://api.example.com/config');
    } catch (error) {
        console.error(error);
    }
})();