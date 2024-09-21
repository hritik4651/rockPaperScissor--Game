let icons = document.querySelectorAll(".icon");
let result = document.querySelector("#result");
let resultBg = document.querySelector(".result");
let reset = document.querySelector("#reset");
let userScore = document.querySelector("#userScore");
let computerScore = document.querySelector("#computerScore");

let uScore = 0;
let cScore = 0;
const option = ["rock", "paper", "scissor"]

const draw = () => {
     result.innerText = "Draw";
     // console.log("Draw");
}

const showResult = (userWin) => {
     if (userWin) {
          uScore++;
          userScore.innerText = `${uScore}`;
          result.innerText = "You Win";
     } else {
          cScore++;
          computerScore.innerText = `${cScore}`;
          result.innerText = "You loss";
     }
}

const genComputerChoice = () => {
     const comChoice = Math.floor(Math.random() * 3);
     return comChoice;
}

const playGame = (uChoice) => {
     console.log("user:: ", uChoice);
     const compChoice = genComputerChoice();
     console.log("computer:: ", option[compChoice]);
     if (uChoice === option[compChoice]) {
          draw();
     } else {
          let userWin = true;
          if (uChoice === "rock") {
               userWin = option[compChoice] === "paper" ? false : true;
          } else if (uChoice === "paper") {
               userWin = option[compChoice] === "scissor" ? false : true;
          } else {
               userWin = option[compChoice] === "rock" ? false : true;
          }
          showResult(userWin);
     }
}

icons.forEach(element => {
     element.addEventListener("click", () => {
          // console.log(element);
          const userChoice = element.getAttribute("id");
          playGame(userChoice);
     })
});

reset.addEventListener("click", () => {
     uScore = 0;
     cScore = 0;
     userScore.innerText = `${uScore}`;
     computerScore.innerText = `${cScore}`;
})