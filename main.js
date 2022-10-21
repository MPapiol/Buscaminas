// Game Variables
let container = document.querySelector('.container')
let rows = 10
let columns = 10
let gameBoard = []
let numberOfMines = 0
let victoryCounter = 0
let mineCounterAround = 0

// ID Selectors
const title = document.getElementById('title')
const play = document.getElementById('play').addEventListener('click', startGame)

//Creating the visual game board
for (let c = 0; c < columns; c++) {
   let column = document.createElement('div');
   column.classList.add('column');
   container.appendChild(column)
   for (let r = 0; r < rows; r++) {
      let rectangle = document.createElement('div')
      rectangle.classList.add('rectangle')
      column.appendChild(rectangle)
   }
}

// Class Selectors
const rectangle = document.querySelectorAll('.rectangle')

//Function StartGame. Initialize Variables
function startGame() {
   title.innerHTML = 'BUSCAMINAS'
   numberOfMines = 0
   victoryCounter = 0
   gameBoard = []
   fillLogicBoard()
}

//Function fillLogicBoard. Push logic Board to game Board
function fillLogicBoard() {
   rectangle.forEach(element => {
      gameBoard.push(element)
   });
   depositMines()
}

//Function depositMines. Deposit Mines to game Board
function depositMines() {
   do {
      numberRandom = Math.floor(Math.random() * 100)
      gameBoard[numberRandom] = -1
      numberOfMines++
   } while (numberOfMines <= parseInt(rows * columns / 10))
   generateWarning()
}

function uncoverRectangles(square, i) {
   square.innerHTML = gameBoard[i]
   if (gameBoard[i] !== -1) {
      if (victoryCounter < gameBoard.length - numberOfMines) {
         victoryCounter++
      } else {
         win()
      }
   } else {
      gameOver()
   }
}

function gameOver() {
   title.innerHTML = 'GAME OVER'
   container.innerHTML = ''
   gameBoard = []
}

function win() {
   title.innerHTML = 'WIN'
}