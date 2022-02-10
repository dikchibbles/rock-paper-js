let plays = ['rock', 'paper', 'scissors'];
let para = document.querySelector('p');
let btn = document.getElementById('play-button');

// document.addEventListener('click', btn, playRound(computerPlay()));

function computerPlay() {
    return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(computerSelection) {
    let playerSelection = prompt('Pick your weapon! Rock, Paper, or Scissors?').trim().toLowerCase();
    if (playerSelection === computerSelection) {
        console.log(playerSelection, computerSelection)
        console.log('Its a draw!');
    }else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(playerSelection, computerSelection)
        console.log('Player won!');
        return 'player';
    }else {
        console.log(playerSelection, computerSelection)
        console.log('Computer won!')
        return 'computer';
    }
}


function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;
    for (let i = 0; i < 5; i++){
        let game = playRound(computerPlay());
        if (game === 'player') {
            playerScore++;
        } else if (game === 'computer') {
            computerScore++;
        }
    }
    switch (true) {
        case (playerScore > computerScore):
            console.log(playerScore, computerScore);
            para.textContent = `Player won! Congradulations. The final score is player: ${playerScore}, computer: ${computerScore}`;
            break;
        case (playerScore < computerScore):
            para.textContent = `Computer won! The final score is player: ${playerScore}, computer: ${computerScore}`;
            break
        case (playerScore === computerScore):
            console.log(playerScore, computerScore);
            para.textContent = `Its a draw! Incredible`
    }
}


playGame();

