let plays = ['rock', 'paper', 'scissors'];
let para = document.querySelector('p');
let btn = document.getElementById('play-button');
const gameDiv = document.getElementById('game-div');
const textDiv = document.getElementById('text-div');
const scoreBoard = document.getElementById('score-board')
let playerScore = 0;
let computerScore = 0;

btn.addEventListener('click', playGame)

function playGame() {
    btn.remove();
    let score = document.createElement('h2');
    score.innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    scoreBoard.appendChild(score);
    createButtons();
}

function createButtons() {
    const btnRock = document.createElement('button');
    const btnPaper = document.createElement('button');
    const btnScissors = document.createElement('button');
    const buttons = [btnRock, btnPaper, btnScissors];
    addButtonStyling(buttons);
    btnRock.textContent = 'Rock';
    btnPaper.textContent = 'Paper';
    btnScissors.textContent = 'Scissors';
    buttons.forEach(button => {
        addButtonFunctionality(button);
        gameDiv.appendChild(button);
    });
}

function addButtonStyling (buttons) {
    buttons.forEach(button => {
        button.classList.add('button-1');
    });
}

function addButtonFunctionality (button) {
    button.addEventListener('click', () => {
        playRound(button.textContent.toLowerCase(), computerPlay());
    })
}

function playRound(playerSelection, computerSelection) {
    let newh3;
    if (textDiv.querySelector('h3')) { // check if there is an h3 element in the gameDiv, if not create one
        newh3 = textDiv.querySelector('h3');
    } else {
        newh3 = document.createElement('h3');
        textDiv.appendChild(newh3);
    }
    if (playerSelection === computerSelection) {
        newh3.innerHTML = `You chose: ${playerSelection} - Computer: ${computerSelection}<br>It's a draw!`;
    }else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'scissors' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'rock')) {
            playerScore++;
            updateScoreBoard();
            newh3.innerHTML = `You chose: ${playerSelection} - Computer: ${computerSelection}<br>Player won!`;
    }else {
        computerScore++;
        updateScoreBoard();
        newh3.innerHTML = `You chose: ${playerSelection} - Computer: ${computerSelection}<br>Computer won, you lost!`;
    }
    
}

function updateScoreBoard () {
    let score = scoreBoard.querySelector('h2');
    score.innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
}

function computerPlay() {
    return plays[Math.floor(Math.random() * plays.length)];
}





