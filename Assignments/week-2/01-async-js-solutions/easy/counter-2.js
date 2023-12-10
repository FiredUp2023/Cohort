let seconds = 0;

const mySetTimeout = function(callback){
    console.log(seconds);
    seconds++;
    setTimeout(mySetTimeout, 1000);
}

mySetTimeout();

