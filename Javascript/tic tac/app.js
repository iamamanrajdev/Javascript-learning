let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = "O";
let isGameOver = false;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function enableBoxes() {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
  });
  isGameOver = false;
  turn = "O";
}

function showWinner(winner) {
  msg.innerText = `Winner: ${winner}`;
  msgContainer.classList.remove("hide");
  isGameOver = true;
}

function showDraw() {
  msg.innerText = "It's a Draw!";
  msgContainer.classList.remove("hide");
  isGameOver = true;
}

function checkWinner() {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        // Someone won!
        boxes[pattern[0]].style.background = "#7af59c";
        boxes[pattern[1]].style.background = "#7af59c";
        boxes[pattern[2]].style.background = "#7af59c";
        showWinner(pos1);
        boxes.forEach(box => box.disabled = true);
        return;
      }
    }
  }
  // Check for draw (all boxes filled and no winner)
  let allFilled = [...boxes].every(box => box.innerText !== "");
  if (allFilled && !isGameOver) {
    showDraw();
  }
}

// Main gameplay
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (isGameOver) return;
    if (box.innerHTML === "") {
      box.innerHTML = turn;
      box.disabled = true;
      checkWinner();
      turn = turn === "O" ? "X" : "O";
    }
  });
});

// Reset Game
function resetGame() {
  enableBoxes();
  boxes.forEach((box) => {
    box.style.background = "#ffe066"; // Restore color
  });
  msgContainer.classList.add("hide");
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

// Initialize
resetGame();
