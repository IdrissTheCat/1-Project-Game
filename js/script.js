
const audio0 = new Audio ();
audio0.src = "../audios/zero.wav";

const audio1 = new Audio ();
audio1.src = "../audios/one.wav";

const audio2 = new Audio ();
audio2.src = "../audios/two.wav";

const audio3 = new Audio ();
audio3.src = "../audios/three.wav";

const audio4 = new Audio ();
audio4.src = "../audios/four.wav";

const audio5 = new Audio ();
audio5.src = "../audios/five.wav";

const audio6 = new Audio ();
audio6.src = "../audios/six.wav";

const audio7 = new Audio ();
audio7.src = "../audios/seven.wav";

const audio8 = new Audio ();
audio8.src = "../audios/eight.wav";

const audio9 = new Audio ();
audio9.src = "../audios/nine.wav";

const audio10 = new Audio ();
audio10.src = "../audios/ten.wav";

const audioSong = new Audio ();
audioSong.src = "../audios/song.wav";




var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var btnSong0to10 = document.getElementById("btnSong0to10");



function playAudio(audio) {
    audio.play();
    };

    
    btn0.addEventListener("click", function() {
        playAudio(audio0);
      });
 
    btn1.addEventListener("click", function() {
        playAudio(audio1);
      });

      btn2.addEventListener("click", function() {
        playAudio(audio2);
      });

      btn3.addEventListener("click", function() {
        playAudio(audio3);
      });

      btn4.addEventListener("click", function() {
        playAudio(audio4);
      });

      btn5.addEventListener("click", function() {
        playAudio(audio5);
      });

      btn6.addEventListener("click", function() {
        playAudio(audio6);
      });

      btn7.addEventListener("click", function() {
        playAudio(audio7);
      });

      btn8.addEventListener("click", function() {
        playAudio(audio8);
      });

      btn9.addEventListener("click", function() {
        playAudio(audio9);
      });

      btn10.addEventListener("click", function() {
        playAudio(audio10);
      });

      btnSong0to10.addEventListener("click", function() {
        playAudio(audioSong);
      });








