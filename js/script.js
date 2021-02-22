

//var btnNumbers = document.getElementById("btnNumbers");

const audio1 = new Audio ();
audio1.src = "../audios/one.wav";

var btn1 = document.getElementById("btn1");



function playAudio() {
audio1.play();
}

function alert1 () {
    alert("ate aqui ok")
}


btn1.addEventListener("click",playAudio);

