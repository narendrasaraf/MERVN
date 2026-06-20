/**
 * WHAT IS CURRYING?
 * Non-curried: fn(a, b, c)
 * Curried:     fn(a)(b)(c)
 */

// ==========================================
// 1. THE BASIC CONCEPT
// ==========================================

// Regular function
function regularAdd(a, b, c) {
    return a + b + c;
}
console.log(regularAdd(2, 3, 5)); // 10

// Curried function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
console.log(curriedAdd(2)(3)(5)); // 10

// Shorthand using Arrow Functions (very common in modern JS)
const arrowCurriedAdd = a => b => c => a + b + c;
console.log(arrowCurriedAdd(2)(3)(5)); // 10


// ==========================================
// 2. WHY IS THIS USEFUL? (Practical Examples)
// ==========================================

// --- Use Case A: Reusability / Partial Application ---
// Suppose you want to log messages but don't want to type the type every time.
const logger = type => message => `[${type.toUpperCase()}] ${message}`;

// Create specialized logging functions from the base curried function
const logError = logger('error');
const logWarning = logger('warning');

console.log(logError('Database connection failed!')); // "[ERROR] Database connection failed!"
console.log(logWarning('Disk space running low.'));   // "[WARNING] Disk space running low."


// --- Use Case B: Dynamic Price Calculator (E-commerce) ---
// Fix a discount rate for a specific checkout session
const calculatePrice = discount => price => price - (price * discount);

const standardDiscount = calculatePrice(0.10); // 10% off
const VIPDiscount = calculatePrice(0.25);      // 25% off

console.log(standardDiscount(100)); // 90
console.log(VIPDiscount(100));      // 75


// ==========================================
// 3. ADVANCED: THE INFINITE CURRYING INTERVIEW TRICK
// ==========================================
// A popular interview question: write an add function that handles add(2)(3)(4)...()
function infiniteAdd(a) {
    return function(b) {
        if (b !== undefined) {
            return infiniteAdd(a + b); // keep returning the function recursively
        }
        return a; // return the final sum when called empty ()
    };
}

console.log(infiniteAdd(1)(2)(3)(4)()); // 10