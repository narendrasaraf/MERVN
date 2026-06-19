for(let i=0;i<=69;i++) console.log("hey Narendra"+i);
let i=0;
let j=8;
while(i<j) {
    console.log("more "+i);
    i++;
}

while(guess!=0) {
    guess=ParseInt(prompt("Guess the number"));
    if(guess==0) {
       alert("You guessed it right");
       break;
    }
}
   