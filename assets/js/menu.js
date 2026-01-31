const opt = document.querySelector(".options");
const body = document.querySelector("body");

function openList(){
    if (opt.style.display == "block") {
        opt.style.display = "none";
        opt.style.animation = "showItems 2s ease 0s 1 reverse";
    } else {
        opt.style.display = "block"
        opt.style.animation = "showItems 2s ease 0s 1";
    }
}

function changeColor(button, secondColor, thirdColor){
    document.body.style.backgroundColor = button.querySelector("i").style.color;
        document.querySelectorAll("button").forEach(btn => {
        btn.style.backgroundColor = secondColor;
    });
    drawCircle(thirdColor)
    document.querySelectorAll("p").forEach(btn => {
        btn.style.color = thirdColor;
    })
}