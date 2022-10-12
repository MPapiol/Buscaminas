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

//Function generate warning. Warn of the surrounding mines
function generateWarning() {
   for (let i = 0; i < gameBoard.length; i++) {
      const isInTheTopCornerLeftMargin = (i === 0)
      const isInBottomCornerLeftMargin = i === 9
      const isInTheTopCornerRightMargin = i === 90
      const isInBottomCornerRightMargin = i === 99
      const isOnTheLeftMargin = (i > 0) && (i < 9)
      const isOnTheRightMargin = i > 90 && i < 99
      const isInTheMarginTop = i % 10 === 0
      const isInTheMarginBottom = (i + 1) % 10 === 0
      const thereMine = (gameBoard[i] === -1)
      const isInTopLeft = gameBoard[i - 11] === -1
      const isInTop = gameBoard[i - 1] === -1
      const isInTopRight = gameBoard[i + 9] === -1
      const isOnTheLeft = gameBoard[i - 10] === -1
      const isOnTheRight = gameBoard[i + 10] === -1
      const isOnBottomLeft = gameBoard[i - 9] === -1
      const isOnBottom = gameBoard[i + 1] === -1
      const isOnBottomRight = gameBoard[i + 11] === -1
      if (isInTheTopCornerLeftMargin && !thereMine) {
         if (isOnTheRight && isOnBottom && isOnBottomRight) {
            mineCounterAround = 3
            gameBoard[i] = 3
         }
         if (isOnTheRight && isOnBottom || isOnTheRight && isOnBottomRight ||
            isOnBottom && isOnBottomRight) {
            mineCounterAround = 2
            gameBoard[i] = 2
         }
         if (isOnTheRight || isOnBottom || isOnBottomRight) {
            mineCounterAround = 1
            gameBoard[i] = 1
         } else {
            mineCounterAround = 0
            gameBoard[i] = 0
         }
         mineCounterAround = 0
      }
      if (isOnTheLeftMargin && !thereMine) {
         if (isOnTheRight) {
            mineCounterAround++
         }
         if (isOnBottom) {
            mineCounterAround++
         }
         if (isInTop) {
            mineCounterAround++
         }
         if (isOnBottomRight) {
            mineCounterAround++
         }
         if (isInTopRight) {
            mineCounterAround++
         }
         if (mineCounterAround !== 0) {
            gameBoard[i] = mineCounterAround
         } else {
            gameBoard[i] = 0
         }
         mineCounterAround = 0
      }
      if (isInBottomCornerLeftMargin && !thereMine) {
         if (isOnTheRight) {
            mineCounterAround++
         }
         if (isInTop) {
            mineCounterAround++
         }
         if (isInTopRight) {
            mineCounterAround++
         }
         if (mineCounterAround !== 0) {
            gameBoard[i] = mineCounterAround
         } else {
            gameBoard[i] = 0
         }
         mineCounterAround = 0
      }
      if (isInTheMarginTop && !thereMine) {
         if (isOnTheRight) {
            mineCounterAround++
         }
         if (isOnBottom) {
            mineCounterAround++
         }
         if (isOnTheLeft) {
            mineCounterAround++
         }
         if (isOnBottomRight) {
            mineCounterAround++
         }
         if (isOnBottomLeft) {
            mineCounterAround++
         }
         if (mineCounterAround !== 0) {
            gameBoard[i] = mineCounterAround
         } else {
            gameBoard[i] = 0
         }
         mineCounterAround = 0
      }
      if (isInTheMarginBottom && !thereMine) {
         if (isOnTheRight) {
            mineCounterAround++
         }
         if (isInTop) {
            mineCounterAround++
         }
         if (isOnTheLeft) {
            mineCounterAround++
         }
         if (isInTopRight) {
            mineCounterAround++
         }
         if (isInTopLeft) {
            mineCounterAround++
         }
         if (mineCounterAround !== 0) {
            gameBoard[i] = mineCounterAround
         } else {
            gameBoard[i] = 0
         }
         mineCounterAround = 0
      }
      if (isInTheTopCornerRightMargin && !thereMine) {
         if (isOnTheLeft) {
            mineCounterAround++
         }
         if (isOnBottom) {
            mineCounterAround++
         }
         if (isOnBottomLeft) {
            mineCounterAround++
         }
         if (mineCounterAround !== 0) {
            gameBoard[i] = mineCounterAround
         } else {
            gameBoard[i] = 0
         }
         mineCounterAround = 0
      }
      if (isOnTheRightMargin && !thereMine) {
         if (isOnTheLeft) {
            mineCounterAround++
         }
         if (isOnBottom) {
            mineCounterAround++
         }
         if (isInTop) {
            mineCounterAround++
         }
         if (isOnBottomLeft) {
            mineCounterAround++
         }
         if (isInTopLeft) {
            mineCounterAround++
         }
         if (mineCounterAround !== 0) {
            gameBoard[i] = mineCounterAround
         } else {
            gameBoard[i] = 0
         }
         mineCounterAround = 0
      }
      if (isInBottomCornerRightMargin && !thereMine) {
         if (isOnTheLeft) {
            mineCounterAround++
         }
         if (isInTop) {
            mineCounterAround++
         }
         if (isInTopLeft) {
            mineCounterAround++
         }
         if (mineCounterAround !== 0) {
            gameBoard[i] = mineCounterAround
         } else {
            gameBoard[i] = 0
         }
         mineCounterAround = 0
      }
      if (!isOnTheLeftMargin &&
         !thereMine &&
         !isOnTheRightMargin &&
         !isInTheMarginTop &&
         !isInTheMarginBottom &&
         !isInBottomCornerRightMargin &&
         !isInBottomCornerLeftMargin &&
         !isInTheTopCornerRightMargin &&
         !isInTheTopCornerLeftMargin) {
         if (isInTopLeft) {
            mineCounterAround++
         }
         if (isInTop) {
            mineCounterAround++
         }
         if (isInTopRight) {
            mineCounterAround++
         }
         if (isOnTheLeft) {
            mineCounterAround++
         }
         if (isOnTheRight) {
            mineCounterAround++
         }
         if (isOnBottomLeft) {
            mineCounterAround++
         }
         if (isOnBottom) {
            mineCounterAround++
         }
         if (isOnBottomRight) {
            mineCounterAround++
         }
         if (mineCounterAround !== 0) {
            gameBoard[i] = mineCounterAround
         } else {
            gameBoard[i] = 0
         }
      }
      mineCounterAround = 0
   }
   rectangle.forEach((square, i) => {
        square.addEventListener('click', () => uncoverRectangles(square, i))
        square.innerHTML = gameBoard[i]
   })
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