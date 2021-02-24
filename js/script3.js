// HTML 3
     



const todosObj =[
    { 
        number : "NULL",
        audio : "zero.wav",
        alternatives: [9,0,3],
        rightAns: 0,

    },
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
        number : "DREI",
        audio : "three.wav",
        alternatives: [3,7,9],
        rightAns: 3,   
    },
    {
        number : "VIER",
        audio : "four.wav",
        alternatives: [6,4,8],
        rightAns: 4,   
    },
    {
        number : "FÜNF",
        audio : "five.wav",
        alternatives: [2,7,5],
        rightAns: 5,   
    },
    {
        number : "SECHS",
        audio : "six.wav",
        alternatives: [2,6,8],
        rightAns: 6,   
    },
    {
        number : "SIEBEN",
        audio : "seven.wav",
        alternatives: [7,5,1],
        rightAns: 7,   
    },
    {
        number : "ACHT",
        audio : "eight.wav",
        alternatives: [4,8,3],
        rightAns: 8,   
    },
    {
        number : "NEUN",
        audio : "nine.wav",
        alternatives: [9,2,7],
        rightAns: 9,   
    },
    {
        number : "ZEHN",
        audio : "ten.wav",
        alternatives: [1,2,10],
        rightAns: 10,   
    },

]
// quando o jogador acertar o current question vamos somar 1, e chamar showtoplayer novamente 
let currentQuestion = Math.floor(Math.random() * 11);

function showToPlayer (index){
    // shownToPlayer é um obj que contem as propriedades numb, audio, alt, rightAns
    const shownToPlayer = todosObj[index];

    // escrever um numero no html

    const numberHtml = `<h1> ${shownToPlayer.number}</h1>`;
    document.getElementById('topNumber').innerHTML = numberHtml;

    const alternativa1js = `<h1>${shownToPlayer.alternatives[0]}</h1>`;
    document.getElementById('alternativa1').innerHTML = alternativa1js;

    const alternativa2js = `<h1>${shownToPlayer.alternatives[1]}</h1>`;
    document.getElementById('alternativa2').innerHTML = alternativa2js;

    const alternativa3js = `<h1>${shownToPlayer.alternatives[2]}</h1>`;
    document.getElementById('alternativa3').innerHTML = alternativa3js;

    // tocar o audio referente ao numero mostrado na tela
    const audio = new Audio ();
    
    audio.src = "../audios/"+shownToPlayer.audio;
    audio.play()

    const alternative1Btn = document.getElementById("alternativa1");
    alternative1Btn.addEventListener("click", function() {
        if (shownToPlayer.alternatives[0] === shownToPlayer.rightAns) {
            
            alternative1Btn.style.backgroundColor="green";
        }
        else if (shownToPlayer.alternatives[0] != shownToPlayer.rightAns){
            alert("errou");
        }
    });

    const alternative2Btn = document.getElementById("alternativa2");
    alternative2Btn.addEventListener("click", function() {
        if (shownToPlayer.alternatives[1] === shownToPlayer.rightAns) {
            alternative2Btn.style.backgroundColor="green";
            
        }
        else if (shownToPlayer.alternatives[1] != shownToPlayer.rightAns){
            
            alert("errou");
        }
    });

        const alternative3Btn = document.getElementById("alternativa3");
    alternative3Btn.addEventListener("click", function() {
        if (shownToPlayer.alternatives[2] === shownToPlayer.rightAns) {
            
            alternative3Btn.style.backgroundColor="green";
        }
        else if (shownToPlayer.alternatives[2] != shownToPlayer.rightAns){
            alert("errou");
        }
    });
    


};

var alternativesNums = document.getElementById("alternativesNums");
alternativesNums.style.display="none";




var playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", function startGame() {

    showToPlayer(currentQuestion)
    playBtn.style.display="none";
    alternativesNums.style.display="flex";
    

});


// Next steps trocar as cores do  HTML fontes
// Logica de ganhar e perder fazer botao ficar verde quando ganha
//Logica de tirar os que ja foram 

