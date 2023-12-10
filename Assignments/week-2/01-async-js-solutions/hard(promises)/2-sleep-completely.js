/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

//A little confused with this problem...
function sleep (seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds*1000)
    });
}

async function wait(n) {
    console.log("sleeping for n seconds")
    await sleep(n);
    console.log("After n seconds");
}

wait(2);

//console.log("actually its asynchronous");
