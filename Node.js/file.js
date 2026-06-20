const fs = require('fs');

// Ensure the directory exists (optional) and write the file
// syncronous call to write a file
fs.writeFileSync('test.txt', "Hello Narendra! This is my first file created using nodejs fs module.");

// Asynchronuous file write operation
fs.writeFile('test2.txt', "Hello Narendra! This is my second file created using nodejs fs module.",err=>{});

// syncronous Read file
const contacts=fs.readFileSync('./contacts.txt','utf-8');
console.log(contacts);

// Asynchronous file read operation
fs.readFile('./contacts.txt','utf-8', (err,result)=> {
    if(err) {
        console.log("Error reading file: ", err);
    }
    else {
        console.log(result);
    }
})

fs.appendFileSync('test.txt', `${Date.now()}hey there\n `);
const os=require('os');
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.cpus().length);