const stateButton = document.getElementById("state");
const timeText = document.getElementById("timer");
const statusButton = document.getElementById("skip");

const working = 25;
const shortBreak = 5;
const longBreak = 15;

let curMin = 0;
let curSec = 2;
let timer = null;
let currentStatus = "working";
let breaksCount = 0;

let endingPct = working;


// While starting the app ---
setStatus();
statusButton.innerText = "finish the session earlier >>>";
timeText.innerText = `${addZero(curMin)}:${addZero(curSec)}`;

let isOn = false;

function checkBreakType(){
        if (breaksCount < 4) {
            return shortBreak;
        } else {
            return longBreak;
        }
}


function addZero(num) {
    if (num < 10){
        return '0' + num;
    } else {
        return num
    }
}

function changePct(t){
        if (currentStatus == "working"){
                    endingPct = t / working * 100
        } else if (currentStatus == "break") {
                    endingPct = t / checkBreakType() * 100
        }
        lineLenght = (Math.PI * 2 * endingPct) / 100;
}

function startTimer(min, sec){
    
    timer = setInterval(() => {
        //console.log(`Current minute: ${curMin}, Current second: ${curSec} | startTimer() | START`)

        ctx.clearRect(0, 0, c.width, c.height)

        ctx.beginPath();
        sec--;

        if (sec < 0) {
            sec = 59;
            min--;
        }
        curMin = min;
        curSec = sec;

        timeText.innerText = `${addZero(curMin)}:${addZero(curSec)}`;


        if (min < 0){
            clearInterval(timer);
            changeStatus();
            //console.log(`MODE CHANGED. CURRENT MINUTE: ${curMin}, IS ON? ${isOn}`);
        }
                changePct(curMin);
        ctx.arc(150, 150, 140, angle ,lineLenght);
        ctx.stroke();


        //console.log(`Current minute: ${curMin}, Current second: ${curSec}, Current status: ${currentStatus} | startTimer() | END`)

    }, 1000);

    
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
    if (currentStatus == "break"){
        curMin = checkBreakType();
    }
    clearInterval(timer);
    stateButton.innerText = "Start";
    isOn = false;
    timeText.innerText = `${addZero(curMin)}:${addZero(curSec)}`;

    ctx.clearRect(0, 0, c.width, c.height)

    ctx.beginPath();
    changePct(curMin);
    ctx.arc(150, 150, 140, angle ,lineLenght);
    ctx.stroke();

    //console.log(`BREAKS NUM: ${breaksCount}, BREAK TIME: ${checkBreakType()}||| CURRENT MINUTE: ${curMin}, CURRENT SECOND: ${curSec}`)
}

function setStatus(){
    curSec = 0;
    if (currentStatus == "working"){
        curMin = working;
    } else if (currentStatus == "break") {
        if (breaksCount < 4) {
            breaksCount++;
        } else {
            breaksCount = 0;
        }
    }
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
    //console.log(`Current minute: ${curMin}, Current second: ${curSec} | changeState()`)
}