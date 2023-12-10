const fs = require('fs');


console.log("Reading hello.txt file...")

fs.readFile('hello.txt', 'utf-8', (err, data) => {
    console.log(data);
    console.log("File Read Successfully");
})

console.log("On our main thread...");

let a = 0; 
for(let i = 0; i<1000000000; i++){
    a+= i;
}
console.log(a);
