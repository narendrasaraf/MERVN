// const age=18;
let age=4
if(age>=18) {
    console.log("You are eligible to vote");
} else console.log("You are not eligible to vote");

age<0 ? console.log("Age cannot be negative") : console.log("Age is valid"); //ladder elif

// switch case
switch(age) {
    case 1: console.log("You are 1 year old");
    break;
    case 2: console.log("You are 2 year old");
    break;
    default: console.log("You are not 1 or 2 year old");
}    