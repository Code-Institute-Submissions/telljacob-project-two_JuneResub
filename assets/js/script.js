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

let rounds = document.getElementsByClassName(".inputRounds");
let work = document.getElementsByClassName(".inputWork");
let rest = document.getElementsByClassName(".inputRest");

var counter = 120;
var startcounter = counter;

setInterval( function(){
    counter--;

    if( counter >= 0 ){
        id = document.getElementById("timerCountdown");
        id.innerHTML = counter;
    }

    if( counter === 0 ){
        id.innerHTML = "WORK COMPLETE";
    }

    let percentTimer = document.getElementById("percentCountdown");
    percentTimer.innerHTML = Math.round((startcounter/counter));

}, 1000);