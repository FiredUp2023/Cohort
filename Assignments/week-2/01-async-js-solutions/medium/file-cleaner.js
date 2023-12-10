const fs = require('fs')

let fdata = "";
const inputDataToFile = function(){
    let ndata = "";
    fdata = fdata.split(" ");
    for(let e of fdata){
        if(e !== ''){
            ndata += " " + e;
        }
    }
    ndata = ndata.trim();
    fs.writeFile('hello.txt', ndata, () => {
        console.log("Written the file");
        console.log(ndata);
    })
}
fs.readFile('hello.txt', 'utf-8', (err, data)=>{
    fdata = data;
    console.log(data);
    inputDataToFile();
})
