// Blocking code in Node.js
const fs=require('fs');

// This will block the execution until the file is read
console.log("Before reading file");
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
console.log("After reading file");

// Non blocking code in Node.js
console.log("Before reading file");
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log(data);
    }
});
console.log("After reading file");
