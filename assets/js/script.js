/*
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("input-rounds") === "start-workout") {
                alert("You sent in a message");
            } else {

            }
        })
    }
})
*/

// Import input data
let rounds = document.querySelector("inputRounds");
let work = document.querySelector("inputWork");
let rest = document.querySelector("inputRest");

// Import start, stop and reset buttons
var start = document.querySelector("startWorkout");
var stop = document.querySelector("stopWorkout");
var reset = document.querySelector("resetWorkout");


work = inputWork;

setInterval( function(){
    work--;

    if( work >= 0 ){
        id = document.getElementById("inputWork");
        id.innerHTML = work;
    }

    if( work === 0 ){
        id.innerHTML = "WORKOUT COMPLETE";
    }
}, 1000);