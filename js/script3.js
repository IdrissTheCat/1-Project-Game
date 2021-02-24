// HTML 3
     
var numAserExibido = 2;
var tresNumRandom = 789;

const todosObj =[
    { 
        number : "EIN",
        audio : "one.wav",
        alternatives: [3,5,1],
        rightAns: 1,

    },
    {
        number : "ZWAI",
        audio : "two.wav",
        alternatives: [3,2,6],
        rightAns: 2,   
    },
    {
        number : "ZWAI",
        audio : "two.wav",
        alternatives: [3,2,6],
        rightAns: 2,   
    },
    {
        number : "ZWAI",
        audio : "two.wav",
        alternatives: [3,2,6],
        rightAns: 2,   
    },
    {
        number : "ZWAI",
        audio : "two.wav",
        alternatives: [3,2,6],
        rightAns: 2,   
    },
    {
        number : "ZWAI",
        audio : "two.wav",
        alternatives: [3,2,6],
        rightAns: 2,   
    },
    {
        number : "ZWAI",
        audio : "two.wav",
        alternatives: [3,2,6],
        rightAns: 2,   
    },
    {
        number : "ZWAI",
        audio : "two.wav",
        alternatives: [3,2,6],
        rightAns: 2,   
    },
    {
        number : "ZWAI",
        audio : "two.wav",
        alternatives: [3,2,6],
        rightAns: 2,   
    },
    {
        number : "ZWAI",
        audio : "two.wav",
        alternatives: [3,2,6],
        rightAns: 2,   
    },

]
// quando o jogador acertar o current question vamos somar 1, e chamar showtoplayer novamente 
let currentQuestion = 1;

function showToPlayer (index){
    // shownToPlayer é um obj que contem as propriedades numb, audio, alt, rightAns
    const shownToPlayer = todosObj[index];

//  escrever um numero no html

    const numberHtml = `<h1>${shownToPlayer.number}</h1>`;
    document.getElementById('topNumber').innerHTML = numberHtml;

    // tocar o audio referente ao numero mostrado na tela
    const audio = new Audio ();
    
    audio.src = "../audios/"+shownToPlayer.audio;
    audio.play()

    console.log (numberHtml);
};



var playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", function startGame() {

    showToPlayer(currentQuestion)

//   console.log('funcao rodando');
//   var textDiv1 = document.createElement('h1');
//   textDiv1.setAttribute ('id', 'textoDiv1');
//   textDiv1.innerText = numAserExibido;
//   document.getElementById('randomShown').appendChild(textDiv1);

});