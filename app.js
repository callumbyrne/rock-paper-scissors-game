function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return console.log('Tie!');
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return playerScore++;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return computerScore++;
    }
}


function game() {
    for (let i = 0; i < 10; i++) {
        if (playerScore !== 3 && computerScore !== 3) {
            const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
            const computerSelection = computerPlay();

            playRound(playerSelection, computerSelection);
            console.log(playerScore);
        } else if (playerScore > computerScore) {
            return console.log(`You win! ${playerScore} to ${computerScore}`);
        } else {
            return console.log(`You lose! ${playerScore} to ${computerScore}`);
        }
    }
}

game();
