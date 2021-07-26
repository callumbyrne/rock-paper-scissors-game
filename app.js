const outputText = document.querySelector('.outputText');
const player = document.querySelector('#playerScore');
const computer = document.querySelector('#computerScore');
const btns = document.querySelectorAll('.option');
const resetBtn = document.querySelector('.reset');

let playerScore = 0;
let computerScore = 0;

function isGameOver() {
    if (playerScore === 5) {
        for (let i = 0; i < btns.length; i++) {
            btns[i].disabled = true;
        }
        outputText.textContent = "YOU WIN!";
    } else if (computerScore === 5) {
        for (let i = 0; i < btns.length; i++) {
            btns[i].disabled = true;
        }
        outputText.textContent = "YOU LOSE :(";
    };
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    player.textContent = 0;
    computer.textContent = 0;
    outputText.textContent = "";
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
    }
}

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        outputText.textContent = 'Tie!';
        return console.log('Tie!');
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        outputText.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        return player.textContent = playerScore;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        outputText.textContent = `You Lose! ${playerSelection} beats ${computerSelection}`;
        computerScore++;
        return computer.textContent = computerScore;
    }
}


// function game(playerSelection, computerSelection) {
//     for (let i = 0; i < 10; i++) {
//         if (playerScore !== 3 && computerScore !== 3) {
//             // const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
//             // const computerSelection = computerPlay();

//             playRound(playerSelection, computerSelection);
//             console.log(playerScore);
//         } else if (playerScore > computerScore) {
//             return console.log(`You win! ${playerScore} to ${computerScore}`);
//         } else {
//             return console.log(`You lose! ${playerScore} to ${computerScore}`);
//         }
//     }
// }

// game();

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playerSelection = 'rock'
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    isGameOver();
})

paper.addEventListener('click', () => {
    playerSelection = 'paper'
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    isGameOver();
})

scissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    isGameOver();
})

resetBtn.addEventListener('click', () => {
    reset();
})