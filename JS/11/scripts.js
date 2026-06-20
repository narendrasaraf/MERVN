/**
 * WHAT IS A CLOSURE?
 * A closure is the combination of a function bundled together with references 
 * to its surrounding state (the lexical environment). In simpler terms: 
 * A closure gives an inner function access to the outer function's scope 
 * even after the outer function has finished executing.
 */

// ==========================================
// 1. THE BASIC EXAMPLE (The "Hello World")
// ==========================================
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

// newFunction is now the 'innerFunction', but it still remembers 'outerVariable'
const newFunction = outerFunction('outside');
newFunction('inside'); 


// ==========================================
// 2. DATA PRIVACY & ENCAPSULATION (State Management)
// ==========================================
// Closures allow you to create "private" variables that cannot be accessed or 
// modified directly from the outside world.
function createCounter() {
    let count = 0; // This variable is private

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
// console.log(counter.count);    // undefined (Cannot access directly!)


// ==========================================
// 3. FUNCTION FACTORY (Customizing Functions)
// ==========================================
// You can use closures to generate tailored functions.
function makeGreeter(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

const sayHello = makeGreeter('Hello');
const sayHola = makeGreeter('Hola');

sayHello('Alice'); // "Hello, Alice!"
sayHola('Carlos'); // "Hola, Carlos!"


// ==========================================
// 4. THE PRACTICAL WEB EXAMPLE (Event Listeners / UI)
// ==========================================
// Useful for creating button click handlers that need to know specific information 
// without cluttering global variables.
function clickHandler(size) {
    return function() {
        // Imaginary UI adjustment logic
        document.body.style.fontSize = `${size}px`;
        console.log(`Changed font size to ${size}px`);
    };
}

// In a real browser environment, you would use it like this:
// document.getElementById('btn-large').addEventListener('click', clickHandler(24));
// document.getElementById('btn-small').addEventListener('click', clickHandler(12));


// ==========================================
// 5. CACHING / MEMOIZATION (Performance Optimization)
// ==========================================
// Closures can store a "cache" object inside the outer scope to save 
// compute time on repetitive, heavy tasks.
function createHeavyCalculation() {
    const cache = {}; // The cache persists thanks to closure

    return function(num) {
        if (num in cache) {
            console.log("Fetching from cache...");
            return cache[num];
        }
        console.log("Calculating long complex math...");
        const result = num * 100; // Pretend this is a heavy operation
        cache[num] = result;
        return result;
    };
}

const calculate = createHeavyCalculation();
console.log(calculate(5)); // Calculates... returns 500
console.log(calculate(5)); // Fetches from cache... returns 500


// ==========================================
// 6. ASYNC & TIMEOUT CLOSURE TRAP (Classic Interview Question)
// ==========================================
// Using 'var' inside a loop can break due to closures looking at the same reference. 
// Using 'let' creates a new block-scoped closure for every iteration.
function runTimeoutExample() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(function logIndex() {
            console.log(`After ${i} second(s): i = ${i}`);
        }, i * 1000);
    }
}
runTimeoutExample();