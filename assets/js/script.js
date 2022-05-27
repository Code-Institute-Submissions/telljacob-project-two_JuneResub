isEnabled = true;
var m = document.getElementById("inputWork");
var start = document.getElementById("startWork");
var stop = document.getElementById("stopWork");
var reset = document.getElementById("resetWork");

start.addEventListener('click', function() {
    if (isEnabled) {
        timer();
    }
    else {
        isEnabled = true;
    }
});

stop.addEventListener('click', function() {
    isEnabled = false;
});

reset.addEventListener('click', function() {
    id = document.getElementById("timerCountdown");
    id.innerHTML = "00h:00m:00s";
    percentTimer = document.getElementById("percentCountdown");
    percentTimer.innerHTML = "";
})

// Import value from input
function timer() {
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
                id = document.getElementById("timerCountdown");
                id.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
            }
        
            if( counter === 1 ){
                id.innerHTML = "WORK COMPLETE";
            }
        
            let percentTimer = document.getElementById("percentCountdown");
            percentTimer.innerHTML = "Session " + Math.round((startcounter/counter)*100) + "% Completed";
        }
    }, 1000);
}