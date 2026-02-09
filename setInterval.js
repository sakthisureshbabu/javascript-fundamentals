// const id = setInterval(() => {
//     console.log("Running...");
// }, 1000);

// // Stop after 5 seconds
// setTimeout(() => {
//     clearInterval(id);
//     console.log("Stopped");
// }, 5000);

//Countdown Timer
let seconds = 5;

const id = setInterval(() => {
    console.log(seconds);
    seconds--;

    if(seconds <= 0) {
        clearInterval(id);
        console.log("Done!");
    }
}, 1000);
