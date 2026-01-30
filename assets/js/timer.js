const stateButton = document.getElementById("state");
const timeText = document.getElementById("timer");
const statusButton = document.getElementById("skip");

const working = 1;
const shortBreak = 2;
const longBreak = 15;

let curMin = 0;
let curSec = 2;
let timer = null;
let currentStatus = "working";
let breaksCount = 0;


// While starting the app ---
setStatus();
statusButton.innerText = "finish the session earlier >>>";
timeText.innerText = `${addZero(curMin)}:${addZero(curSec)}`;

let isOn = false;


function addZero(num) {
    if (num < 10){
        return '0' + num;
    } else {
        return num
    }
}

function startTimer(min, sec){
    
    timer = setInterval(() => {
        console.log(`Current minute: ${curMin}, Current second: ${curSec} | startTimer() | START`)

        sec--;

        if (sec < 0) {
            sec = 5;
            min--;
        }
        curMin = min;
        curSec = sec;

        timeText.innerText = `${addZero(min)}:${addZero(sec)}`;


        if (min < 0){
            clearInterval(timer);
            changeStatus();
            changeState();
        }

        console.log(`Current minute: ${curMin}, Current second: ${curSec} | startTimer() | END`)

    }, 1000);

    
}

function setStatus(){
    curSec = 0;
    if (currentStatus == "working"){
        curMin = working;
    } else if (currentStatus == "break") {
        if (breaksCount < 4) {
            curMin = shortBreak;
        } else {
            curMin = longBreak;
            breaksCount = 0;
        }
        breaksCount++;
    }
}

function changeStatus(){
    if (currentStatus == "working"){
        currentStatus = "break";
        statusButton.innerText = "skip the break >>>"
    } else {
        currentStatus = "working";
        statusButton.innerText = "finish the session earlier >>>"
    }
    setStatus();
    clearInterval(timer);
        clearInterval(timer);
        stateButton.innerText = "Start";
        isOn = false;
    timeText.innerText = `${addZero(curMin)}:${addZero(curSec)}`;
}

function changeState(){
    if (!isOn){
        stateButton.innerText = "Pause";
        startTimer(curMin, curSec);
        isOn = true;
    } else {
        clearInterval(timer);
        stateButton.innerText = "Start";
        isOn = false;
    }
    console.log(`Current minute: ${curMin}, Current second: ${curSec} | changeState()`)
}