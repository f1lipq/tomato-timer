const c = document.getElementById("timer-circle");
const ctx = c.getContext("2d");
const angle = 0;
const pct = 100;
let lineLenght = (Math.PI * 2 * pct) / 100;

// Math.PI * 2 = 100%, Math.PI = 50%

function drawCircle(strokeColor){
    ctx.beginPath();
    ctx.arc(150, 150, 140, angle ,lineLenght);

    // stroke ---
    ctx.lineWidth = 5;
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
}

drawCircle("rgb(37, 12, 12)")