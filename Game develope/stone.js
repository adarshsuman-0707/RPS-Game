let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice")
let userScorepara = document.querySelector("#user-score")
let compScorepara = document.querySelector("#comp-score")
const msg = document.querySelector("#result")
const genComputerChoice = () => {
    //rock,paper,seizer
    const options = ["rock", "paper", "seizer"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}
const drawgame = () => {
    console.log("game draw");
    msg.innerHTML = "Game Draw!! try again"
    msg.style.backgroundColor = "black"
}
const showWinner = (userWin, userchoice,compchoice) => {
    
 
    if (userWin) {
        userScore++;  
        userScorepara.innerText = userScore
        msg.innerText = `You win ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green"
    }
    else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lost ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor = "red"
    }
}
const playgame = (userchoice) => {
    console.log("user choice=", userchoice);
    //generate computer choice->modular way of programing

    const compchoice = genComputerChoice();
    console.log("computer choice:", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true
        }
        else if (userchoice === "paper") {
            userWin = compchoice === "seizer" ? false : true
        } else {
            userWin = compchoice === "rock" ? false : true
        }
        showWinner(userWin,userchoice,compchoice)
        }

}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    })
})








