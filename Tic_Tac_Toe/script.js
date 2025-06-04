let currentPlayer = "X";
let gameOver = false;

function makeMove(cell) {
  if (cell.textContent === "" && !gameOver) {
    cell.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (!gameOver) {
      document.getElementById("message").textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWinner() {
  const boxes = document.getElementsByClassName("box");
  const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6]           // diagonals
  ];

  for (let combo of winningCombos) {
    let [a, b, c] = combo;
    if (
      boxes[a].textContent &&
      boxes[a].textContent === boxes[b].textContent &&
      boxes[a].textContent === boxes[c].textContent
    ) {
      document.getElementById("message").textContent = `Player ${boxes[a].textContent} wins!`;
      gameOver = true;
      return;
    }
  }

  let allFilled = true;
  for (let box of boxes) {
    if (box.textContent === "") {
      allFilled = false;
      break;
    }
  }

  if (allFilled) {
    document.getElementById("message").textContent = "It's a draw!";
    gameOver = true;
  }
}

function resetGame() {
  const boxes = document.getElementsByClassName("box");
  for (let box of boxes) {
    box.textContent = "";
  }
  currentPlayer = "X";
  gameOver = false;
  document.getElementById("message").textContent = `Player X's turn`;
}
