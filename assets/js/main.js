function addZero(num) {
    if (num < 10){
        return '0' + num;
    } else {
        return num
    }
}

function startTimer(min, sec){
    const timer = setInterval(() => {

        sec--;

        if (sec < 0) {
            sec = 59;
            min--;
        }

        if (min < 0){
            clearInterval(timer);
            changeMode();
        }

        console.log(`${addZero(min)}:${addZero(sec)}`);

    }, 1000);
}

function changeMode(){
    
}

startTimer(25, 0);