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


let work = document.getElementsByClassName(".inputWork");
let rest = document.getElementsByClassName(".inputRest");

var counter = 3600;
var startcounter = 0;

// Fix activate on click
setInterval( function(){
    counter--;
    startcounter++;

    let hours = Math.floor((counter % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((counter % (60 * 60)) / (60));
    let seconds = Math.floor((counter % (60)));

    if( counter >= 0 ){
        id = document.getElementById("timerCountdown");
        id.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    }

    if( counter === 0 ){
        id.innerHTML = "WORK COMPLETE";
    }

    let percentTimer = document.getElementById("percentCountdown");
    percentTimer.innerHTML = Math.round((startcounter/counter)*100);

}, 1000);

