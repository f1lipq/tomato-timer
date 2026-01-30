const stateButton = document.getElementById("state");
const timeText = document.getElementById("timer");

const working = 25;
const shortBreak = 5;
const longBreak = 15;

let curMin = 0;
let curSec = 0;
let timer = null;

curMin = working;

let isOn = false;

timeText.innerText = `${addZero(curMin)}:${addZero(curSec)}`;

function addZero(num) {
    if (num < 10){
        return '0' + num;
    } else {
        return num
    }
}

function startTimer(min, sec){
    
    timer = setInterval(() => {

        sec--;

        if (sec < 0) {
            sec = 59;
            min--;
        }

        if (min < 0){
            clearInterval(timer);
        }

        timeText.innerText = `${addZero(min)}:${addZero(sec)}`;
        curMin = min;
        curSec = sec;

    }, 1000);

    
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
}