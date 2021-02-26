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

let pontos = 0;
let vidas = 3;
let coraçao3 = document.getElementById('coração3');
let currentQuestion;

function showToPlayer (){

    

    currentQuestion = Math.floor(Math.random() * todosObj.length);
    
    // shownToPlayer é um obj que contem as propriedades numb, audio, alt, rightAns
    const shownToPlayer = todosObj[currentQuestion];

    console.log(shownToPlayer);

    // escrever um numero no html
    document.getElementById('numeroVidas').innerHTML = showLife(vidas);

    const numeroPontos = `<h4>${pontos}</h4>`;
    document.getElementById('placar').innerHTML =numeroPontos;


    const numberHtml = `<h1> ${shownToPlayer.number}</h1>`;
    document.getElementById('topNumber').innerHTML = numberHtml;

    const alternativa1js = `<h1>${shownToPlayer.alternatives[0]}</h1>`;
    document.getElementById('alternativa1').innerHTML = alternativa1js;

    const alternativa2js = `<h1>${shownToPlayer.alternatives[1]}</h1>`;
    document.getElementById('alternativa2').innerHTML = alternativa2js;

    const alternativa3js = `<h1>${shownToPlayer.alternatives[2]}</h1>`;
    document.getElementById('alternativa3').innerHTML = alternativa3js;

    const alternativeNums = document.getElementById('alternativesNums');
    alternativeNums.setAttribute('answ', shownToPlayer.rightAns);


    const alternative1Btn = document.getElementById("alternativa1");
    alternative1Btn.style.backgroundColor = 'gray';
    
    const alternative2Btn = document.getElementById("alternativa2");
    alternative2Btn.style.backgroundColor = 'gray';

    const alternative3Btn = document.getElementById("alternativa3");
    alternative3Btn.style.backgroundColor = 'gray';

    // tocar o audio referente ao numero mostrado na tela
    const audio = new Audio ();
    
    audio.src = "../audios/"+shownToPlayer.audio;
    audio.play()



};

var alternativesNums = document.getElementById("alternativesNums");
alternativesNums.style.display="none";




var playBtn = document.getElementById("playBtn");



const alternative1Btn = document.getElementById("alternativa1");
alternative1Btn.addEventListener("click", function() {
const alternativeNumbers = document.getElementById('alternativesNums');

    if (Number(alternative1Btn.innerText) === Number(alternativeNumbers.getAttribute('answ'))) {
        

        alternative1Btn.style.backgroundColor="green";
        pontos +=1;
        const numeroPontos = `<h4>${pontos}</h4>`;
        document.getElementById('placar').innerHTML =numeroPontos;
        console.log(`pontos`);
        todosObj.splice(currentQuestion,1);
        setTimeout(function(){
            showToPlayer();  
        }, 1000);
        
    }
    else{
        
        vidas -=1;
        
        document.getElementById('numeroVidas').innerHTML = showLife(vidas);
        
        if (vidas==0) {
            const htmlPag3 = document.getElementById('htmlPag3');
            htmlPag3.innerHTML =`
            <h1>GAME OVER</h1>
            <button><a href="pag2.html">STUDY MORE AND PLAY AGAIN</a></button>
            ` ;
        } else {
            showToPlayer();
        }
    }
});

const alternative2Btn = document.getElementById("alternativa2");
alternative2Btn.addEventListener("click", function() {
    const alternativeNumbers = document.getElementById('alternativesNums');
    if (Number(alternative2Btn.innerText)  === Number(alternativeNumbers.getAttribute('answ'))) {
        alternative2Btn.style.backgroundColor="green";
        pontos +=1;
        const numeroPontos = `<h4>${pontos}</h4>`;
        document.getElementById('placar').innerHTML =numeroPontos;
        console.log(`pontos`);
        todosObj.splice(currentQuestion,1);
        setTimeout(function(){
            showToPlayer();  
        }, 1000);
        
    }
    else{
        vidas -=1;
        
        document.getElementById('numeroVidas').innerHTML = showLife(vidas);
        if (vidas==0) {
            
            const htmlPag3 = document.getElementById('htmlPag3');
            htmlPag3.innerHTML =`
            <h1>GAME OVER</h1>
            <button><a href="pag2.html">STUDY MORE AND PLAY AGAIN</a></button>
            ` ;
        } else {
            showToPlayer();
        }
    }
});

const alternative3Btn = document.getElementById("alternativa3");   
alternative3Btn.addEventListener("click", function() {
    const alternativeNumbers = document.getElementById('alternativesNums');
    if (Number(alternative3Btn.innerText)  === Number(alternativeNumbers.getAttribute('answ'))) {
        
        alternative3Btn.style.backgroundColor="green";
        pontos +=1;
        const numeroPontos = `<h4>${pontos}</h4>`;
        document.getElementById('placar').innerHTML =numeroPontos;
        console.log(`pontos`);
        todosObj.splice(currentQuestion,1);
        setTimeout(function(){
            showToPlayer();  
        }, 1000);
    }
    else {
       
        vidas -=1;
        
        document.getElementById('numeroVidas').innerHTML = showLife(vidas);
        if (vidas==0) {
            const htmlPag3 = document.getElementById('htmlPag3');
            htmlPag3.innerHTML =`
            <h1>GAME OVER</h1>
            <button><a href="pag2.html">STUDY MORE AND PLAY AGAIN</a></button>
            ` ;
        } else {
            showToPlayer();
        }
        
    }
});

function showLife (lives) {
let allLives = "";
    for (let i=0; i<lives ; i++) {
const htmlVidas = `<h4 class="coraçoesEmoji">&#x2764;&#xFE0F;</h4>`
allLives+=htmlVidas;

}
return allLives;

}



playBtn.addEventListener("click", function startGame() {

    showToPlayer();
    playBtn.style.display="none";
    alternativesNums.style.display="flex";
    

});


// Next steps trocar as cores do  HTML fontes
// Logica de ganhar e perder fazer botao ficar verde quando ganha
//Logica de tirar os que ja foram 

