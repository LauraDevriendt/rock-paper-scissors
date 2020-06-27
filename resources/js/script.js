
// make collapsible work 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/*****************Game*********************/

// make buttons work ==> the will initialise the game
document.getElementById('rock').onclick = game;
document.getElementById('paper').onclick = game;
document.getElementById('scissors').onclick = game;

// make random choice computer work
let moves = ['rock','paper','scissors'];
function computerPlay () { // creates random generation of computer's choice
    
    let getRandom = moves[Math.floor(Math.random() * moves.length)];
    return getRandom;
    } 

// necessary variables for the function game
var playerSelection = ''; 
var computerSelection = '';
var playerScore = 0;
var computerScore = 0;
var round = 0;
var roundResult ='';

// to make the stars have a color when there's scored
const starPlayerScore = document.querySelectorAll('.player i');
const starComputerScore = document.querySelectorAll('.computer i')
let starPlayer = 0;
let starComputer = 0;


function game (){
  // playerSelection matches button
    playerSelection = this.id; 
  //random choise of computer  
    computerSelection = computerPlay();
  //make img appear which matches the choice of comp and player
    const playImg = document.querySelector('.player-img');
    playImg.src = `resources/img/${playerSelection}Choice.png`

    const compImg = document.querySelector('.computer-img');
    compImg.src = `resources/img/${computerSelection}Choice.png`
  // one play round    

    switch(true) {
      case playerSelection == computerSelection:
        playerScore = playerScore;
        computerScore = computerScore
        round++;
        roundResult =`it's a tie: no points :0`
        break;
      case playerSelection ==  moves[0] && computerSelection == moves[1]:
      case playerSelection == moves[1] && computerSelection == moves[2]:
      case playerSelection == moves[2] && computerSelection == moves[0]:
        ++computerScore;
        round++;
        roundResult =`You've lost this round :(`
        starComputerScore[starComputer].classList.add('stars-color');
        starComputer++;
        break;
      case playerSelection == moves[0] && computerSelection == moves[2]:
      case playerSelection == moves[1] && computerSelection == moves[0]:
      case playerSelection == moves[2] && computerSelection == moves[1]:
        ++playerScore;
        round++;
        roundResult =`You've won this round :D`
        starPlayerScore[starPlayer].classList.add('stars-color');
        starPlayer++;
        break;
    }

     

    //reset game once round 5 is finished

    const modalContainer = document.querySelector('#overlay');
    const endResult = document.querySelector('#overlay .endresult');
    const scoring = document.querySelector('#overlay .score__container');


    if (round === 5){
       if(playerScore>computerScore ) { 
        endResult.textContent = "GAME IS OVER! YOU WON!";

        modalContainer.style.display = "block"
        scoring.textContent =`${playerScore}:${computerScore}`

        
        
      }else if (playerScore<computerScore) {
        endResult.textContent = "GAME IS OVER! COMPUTER WON!";


           modalContainer.style.display = "block"
           scoring.textContent =`${computerScore}:${playerScore}`


       }else {
        endResult.textContent = "It's a tie";

        modalContainer.style.display = 'block'

           scoring.textContent =`${playerScore}:${computerScore}`

       }

  }

  //make the game function appear on the UI
    
  document.getElementById ('round').innerHTML = `Round: ${round}`;
  document.getElementById('playerScore').innerHTML = `Player scrore: ${playerScore}`;
  document.getElementById('computerScore').innerHTML =`Computer scrore: ${computerScore}`;
  document.getElementById('roundResult').innerHTML = `${roundResult}`;

// make page reload when button is play again is pushed in pop-up

  function reStart(e){
    location.reload();
    modalContainer.style.display = 'none';
  } 

  document.querySelector('#overlay .btnReplay').addEventListener('click', reStart);

    
}

   


