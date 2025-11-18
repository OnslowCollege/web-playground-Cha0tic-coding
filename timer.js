let startTime;
let timerInterval;
const timerDisplay = document.getElementById('speedrun-timer');

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 10); // Update every 10ms
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // Format the time with leading zeros
    const formatTime = (value) => value.toString().padStart(2, '0');

    timerDisplay.textContent = 
        `${formatTime(minutes)}:${formatTime(seconds)}.${formatTime(milliseconds)}`;
}

// Auto-start the timer when the script loads/page is ready
window.onload = startTimer;
