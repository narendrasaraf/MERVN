const sayHello=()=>{
    console.log("Hello Worls");
}

const add=(a,b)=> {
    return a+b;
}

const addv2=(a,b)=> a+b;

console.log(add(1,2));
console.log(addv2(1,2));

const v2=(...nums)=>{
    let ans=0;
    for(let i=0;i<nums.length;i++) {
        ans+=nums[i];
    }
}

