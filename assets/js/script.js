isEnabled = true;
timerGoing = false;
var m = document.getElementById("inputWork");
var start = document.getElementById("startWork");
var stop = document.getElementById("stopWork");
var reset = document.getElementById("resetWork");
var id = document.getElementById("timerCountdown");

start.addEventListener('click', function() {
    if (isEnabled) {
        if (timerGoing) {
            isEnabled = true;
        }
        else {
            timer()
        }
    }
    else {
        isEnabled = true;
    }
});

stop.addEventListener('click', function() {
    isEnabled = false;

});

reset.addEventListener('click', function() {
    percentTimer = 0;
    id.innerHTML = "00h:00m:00s";
    percentTimer.innerHTML = "";
    timerGoing = false;
})

// Import value from input
function timer() {
    timerGoing = true;
    const inputValue = document.getElementById("inputWork").value;
    let counter = inputValue * 60;
    var startcounter = 0;
    setInterval( function(){
        if (isEnabled) {
        counter--;
            startcounter++;
        
            let hours = Math.floor((counter % (60 * 60 * 24)) / (60 * 60));
            let minutes = Math.floor((counter % (60 * 60)) / (60));
            let seconds = Math.floor((counter % 60));
        
            if( counter >= 0 ){
                id.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
            }
        
            if( counter === 1 ){
                id.innerHTML = "WORK COMPLETE";
            }
        }
    }, 1000);
}