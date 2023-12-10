const fs = require('fs');

const data = "Hello, I am writting this data into the hello.txt";
fs.writeFile('hello.txt', data, 'utf-8', () => {
    console.log("File Written successfully");
})

console.log("Continuing our thread");
