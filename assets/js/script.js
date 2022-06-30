isEnabled = true;
timerGoing = false;
var startCounter;
var counter;

var inputValue = document.getElementById("inputWork").value;
var startValue = inputValue;
var start = document.getElementById("startWork");
var stop = document.getElementById("stopWork");
var reset = document.getElementById("resetWork")
var id = document.getElementById("timerCountdown");

const audio = new Audio();
audio.src = "./assets/sounds/success.mp3";

start.addEventListener('click', function() {
    if (isEnabled) {
        if (timerGoing) {
            isEnabled = true;
        }
        else {
            inputValue = document.getElementById("inputWork").value;
            if (inputValue > 120 ) {
                alert("You shouldn't study for more than 2h at a time!");
            }
            else {
                timer();
            }
        }
    }
    else {
        isEnabled = true;
    }
});

// Funtion to stop/pause the timer. Works as a toggle for the entire timer funtion through the isEnabled variable
stop.addEventListener('click', function() {
    isEnabled = false;
});

// Reset function. Resets to the initial values put into the timer and sets the innerHTML values to 00h:00m:00s.
reset.addEventListener('click', function() {
    counter = inputValue * 60;
    startCounter = 0;
    isEnabled = false;
    id.innerHTML = "00h:00m:00s";
});

// Function for the active timer. Controlled by the timerGoing boolean
function timer() {
    timerGoing = true;
    counter = inputValue * 60;
    startCounter = 0;
    setInterval( function(){
        if (isEnabled) {
        counter--;
            startCounter++;
        
            let hours = Math.floor((counter % (60 * 60 * 24)) / (60 * 60));
            let minutes = Math.floor((counter % (60 * 60)) / (60));
            let seconds = Math.floor((counter % 60));
        
            if(counter >= 3600) {
                id.innerHTML = hours + "h " + minutes + "m " + seconds + "s";
            }

            else if (counter >= 60) {
                id.innerHTML = minutes + "m " + seconds + "s";
            }

            else {
                id.innerHTML = seconds + "s";
                if(counter === 0) {
                    audio.play();
                    counter = inputValue * 60;
                    startCounter = 0;
                    isEnabled = false;
                    id.innerHTML = "WORK COMPLETE";
                }
            }
        }
    }, 1000);
};