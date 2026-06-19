function addition(a,b) {
    return a + b;
}
function hello() {
    console.log("Hello Narendra");
}
function multiply(a,b) {
    return a*b;
}

function addNumbers() {
    let ans=0;
    for(let i=0;i<arguments.length;i++) {
        ans+=arguments[i];
    }
    console.log(ans);
}
addNumbers(1,2,3,4,5,6,7,8,9,10);

function addNumbersV2(...numbers) {
    let ans=0;
    for(let i=0;i<numbers.length;i++) {
        ans+=numbers[i];
    }
    console.log(ans);
}

addNumbersV2(1,2,3,4,5,6,7,8,9,10);
