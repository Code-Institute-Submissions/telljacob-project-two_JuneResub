
document.getElementById("startWork").onclick = function() {
    alert("HELLO SAVE ME FROM")
}

document.getElementById("stopWork").onclick = function() {
    alert("HELLO SAVE ME FROM")
}

document.getElementById("resetWork").onclick = function() {
    alert("HELLO SAVE ME FROM HERE")
}
document.getElementById("inputWork");

let counter = 360;
var startcounter = 0;

// Fix activate on click
setInterval( function(){
    counter--;
    startcounter++;

    let hours = Math.floor((counter % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((counter % (60 * 60)) / (60));
    let seconds = Math.floor((counter % 60));

    if( counter >= 0 ){
        id = document.getElementById("timerCountdown");
        id.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    }

    if( counter === 1 ){
        id.innerHTML = "WORK COMPLETE";
    }

    let percentTimer = document.getElementById("percentCountdown");
    percentTimer.innerHTML = Math.round((startcounter/counter)*100);

}, 1000);

