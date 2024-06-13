let userScore = 0;
let compScore = 0;
let userScoreCount = document.querySelector("#user-score")
let compScoreCount = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg")
const genCompChoice = () => {
    // rock, paper, scissors
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    
    msg.innerText = "Game was Draw!"
    msg.style.backgroundColor= "#081b31"
};

const showWinner = (userWin, userChoice,compChoice) => {
    if (userWin) {
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
        userScore++
        userScoreCount.innerText = userScore
    } else {
        
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
        compScore++
        compScoreCount.innerText = compScore
    }
    
};

const playGame = (userChoice) => {
    
    const compChoice = genCompChoice();
    
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice !== "paper";
        } else if (userChoice === "paper") {
            userWin = compChoice !== "scissors";
        } else {
            userWin = compChoice !== "rock";
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
