document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("input-rounds") === "start-workout") {
                alert("You sent in a message");
            }
        })
    }
})


// Import input data
let rounds = document.querySelector("input-rounds");
let work = document.querySelector("input-work");
let rest = document.querySelector("input-rest");

// Import start, stop and reset buttons
var start = document.querySelector("start-workout");
var stop = document.querySelector("stop-workout");
var reset = document.querySelector("reset-workout");


const countdownEl = document.getElementById("timerCountdown");

setInterval(newCountdown, 1000);

// Timer countdown
function newCountdown() {
    
    countdownEl.innerHTML = '${work}';
    work--;
}

// Initiate at Start press and import numbers