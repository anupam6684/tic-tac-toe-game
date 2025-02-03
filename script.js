let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGamBtn = document.querySelector("#new-game");
let winnerCon = document.querySelector(".msg-container");
let masg = document.querySelector("#msg");

let turnO = true;

let winingPat = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const boxEnable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turnO = true;
  boxEnable();
  winnerCon.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was click!");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.style.color = "#FFD700";
    } else {
      box.innerText = "X";
      turnO = true;
      box.style.color = "#FF4500";
    }
    box.disabled = true;
    checkwiner();
  });
});

const boxdesable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const shoWinner = (winner) => {
  masg.innerText = `Winner is ${winner}`;
  winnerCon.classList.remove("hide");
  boxdesable();
};

const checkwiner = () => {
  for (let patten of winingPat) {
    let pos1val = boxes[patten[0]].innerText;
    let pos2val = boxes[patten[1]].innerText;
    let pos3val = boxes[patten[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        shoWinner(pos1val);
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
newGamBtn.addEventListener("click", resetGame);
