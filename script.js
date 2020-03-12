const box = document.getElementById('space');
const timeElement = document.getElementById('time-element');
const clicks = document.getElementById('clicks-element');
const cps = document.getElementById('cps-element');

let clickListener = box.addEventListener('click', onBoxClick);

let clickReact = 0;
let timerStarted = 0;
let timeLeft;
let timerId;

function onBoxClick() {
    clickReact++
    clicks.innerText = "Clicks: " + clickReact;


    if (timerStarted == 0) {
        timerStarted = 1;
        timeLeft = 50;
        startTimer();

    }
}

function startTimer() {
    timerId = setInterval(timerTick, 100);
    timeElement.innerHTML = Math.ceil(timeLeft / 10);
}

function timerTick() {
    timeLeft--;
    timeElement.innerHTML = Math.ceil(timeLeft / 10);

    const clicksPerSecond = clickReact / 5;


    if (timeLeft <= 0) {
        cps.innerHTML = clicksPerSecond;
        clearInterval(timerId);
        box.removeEventListener('click', onBoxClick);
    } else if (clicksPerSecond > 7) {
        box.style.backgroundColor = "red";
    }


}