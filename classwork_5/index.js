const schet = document.getElementById("counter");
const up = document.getElementById("speedUp");
const down = document.getElementById("speedDown");
const resetButton = document.getElementById("reset");

let seconds = 0;
let intervalId = null; 
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function updateCounter() {
    schet.textContent = formatTime(seconds);
}

up.addEventListener("click", function() {
    clearInterval(intervalId);
    
    document.body.style.backgroundColor = "lightgreen";
    schet.style.color = "rgb(218, 96, 96)";
    
    intervalId = setInterval(function() {
        seconds++;
        updateCounter();
    }, 1000);
});

down.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(218, 96, 96)";
    schet.style.color = "lightgreen";
    clearInterval(intervalId);
    
    intervalId = setInterval(function() {
        if (seconds > 0) {
            seconds--;
            updateCounter();
        }
    }, 1000);
});

resetButton.addEventListener("click", function() {
    clearInterval(intervalId);
    intervalId = null;
    
    seconds = 0;
    updateCounter();
    document.body.style.backgroundColor = "#808080";
    schet.style.color = "black";
});

updateCounter();