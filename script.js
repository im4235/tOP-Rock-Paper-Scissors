function getComputerChoice() {
    let choice = 100*Math.random();
    if (choice < 33) {
        return "Rock";
    } else if (choice < 67) {
        return "Paper";
    } else {
        return "Scissors";
    }
    
}

function getHumanChoice() {
    switch (prompt("Enter your move").toLowerCase()) {
        case 'scissors':
            return "Scissors";
        case 'rock':
            return "Rock";
        case 'paper':
            return "Paper";
        default:
            getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    alert(`You played ${humanChoice} against the PC's ${computerChoice}`)
    if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            return 1;
        } else if (computerChoice === "Paper") {
            return 0;
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            return 1;
        } else if (computerChoice === "Scissors") {
            return 0;
        }
    } else if (humanChoice = "Scissors") {
        if (computerChoice === "Rock") {
            return 0;
        } else if (computerChoice === "Paper") {
            return 1;
        }
    }
}

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;
    for (i=1; i<=rounds; i++) {    
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        switch (playRound(humanSelection, computerSelection)) {
            case 1:
                humanScore += 1;
                break;
            case 0:
                computerScore += 1;
            default:
                break;
        }
    }
    if (computerScore > humanScore) {
        alert(`You lose ${computerScore} - ${humanScore}`)
    } else if (humanScore > computerScore) {
        alert(`You win ${humanScore} - ${computerScore}`)
    } else {
        alert("It's a draw!")
    }
}


function main() {
    playGame(5);  
    
}

main()