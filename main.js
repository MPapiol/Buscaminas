let container = document.querySelector('.container')
let rows = 10
let columns = 10
let gameBoard = []
let numberOfMines = 0
let victoryCounter = 0
const title = document.getElementById('title')
const play = document.getElementById('play').addEventListener('click', startGame)
//Creating the visual game board
for (let i = 0; i < rows; i++) {
   let column = document.createElement('div');
   column.classList.add('column');
   container.appendChild(column)
   for (let j = 0; j < columns; j++) {
      let rectangle = document.createElement('div')
      rectangle.classList.add('rectangle')
      column.appendChild(rectangle)
   }
}
let rectangle = document.querySelectorAll('.rectangle')

function startGame() {
   title.innerHTML = 'BUSCAMINAS'
   numberOfMines = 0
   victoryCounter = 0
   gameBoard = []
   llenarTableroLogico()
}

function llenarTableroLogico() {
   rectangle.forEach(element => {
      gameBoard.push(element)
   });
   depositMines()
}

function depositMines() {
   do {
      numberRandom = Math.floor(Math.random() * 100)
      gameBoard[numberRandom] = -1
      numberOfMines++
   } while (numberOfMines <= parseInt(rows * columns / 10))
   generateWarning()
}
let contadorDeMinasAlrededor = 0

function generateWarning() {
   for (let i = 0; i < gameBoard.length; i++) {
      const estaEnLaEsquinaArribaMargenIzquierdo = (i === 0)
      const estaEnLaEsquinaAbajoMargenIzquierdo = i === 9
      const estaEnLaEsquinaArribaMargenDerecho = i === 90
      const estaEnLaEsquinaAbajoMargenDerecho = i === 99
      const estaEnElMargenIzquierdo = (i > 0) && (i < 9)
      const estaEnElMargenDerecho = i > 90 && i < 99
      const estaEnElMargenArriba = i % 10 === 0
      const estaEnElMargenAbajo = (i + 1) % 10 === 0
      const hayMina = (gameBoard[i] === -1)
      const estaArribaALaIzquierda = gameBoard[i - 11] === -1
      const estaArriba = gameBoard[i - 1] === -1
      const estaArribaALaDerecha = gameBoard[i + 9] === -1
      const estaALaIzquierda = gameBoard[i - 10] === -1
      const estaALaDerecha = gameBoard[i + 10] === -1
      const estaAbajoALaIzquierda = gameBoard[i - 9] === -1
      const estaAbajo = gameBoard[i + 1] === -1
      const estaAbajoALaDerecha = gameBoard[i + 11] === -1
      if (estaEnLaEsquinaArribaMargenIzquierdo && !hayMina) {
         if (estaALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajo) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajoALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (contadorDeMinasAlrededor !== 0) {
            if (contadorDeMinasAlrededor === 3) {
               gameBoard[i] = 3
            }
            if (contadorDeMinasAlrededor === 2) {
               gameBoard[i] = 2
            }
            if (contadorDeMinasAlrededor === 1) {
               gameBoard[i] = 1
            }
         } else {
            gameBoard[i] = 0
         }
         contadorDeMinasAlrededor = 0
      }
      if (estaEnElMargenIzquierdo && !hayMina) {
         if (estaALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajo) {
            contadorDeMinasAlrededor++
         }
         if (estaArriba) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajoALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (estaArribaALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (contadorDeMinasAlrededor !== 0) {
            if (contadorDeMinasAlrededor === 5) {
               gameBoard[i] = 5
            }
            if (contadorDeMinasAlrededor === 4) {
               gameBoard[i] = 4
            }
            if (contadorDeMinasAlrededor === 3) {
               gameBoard[i] = 3
            }
            if (contadorDeMinasAlrededor === 2) {
               gameBoard[i] = 2
            }
            if (contadorDeMinasAlrededor === 1) {
               gameBoard[i] = 1
            }
         } else {
            gameBoard[i] = 0
         }
         contadorDeMinasAlrededor = 0
      }
      if (estaEnLaEsquinaAbajoMargenIzquierdo && !hayMina) {
         if (estaALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (estaArriba) {
            contadorDeMinasAlrededor++
         }
         if (estaArribaALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (contadorDeMinasAlrededor !== 0) {
            if (contadorDeMinasAlrededor === 3) {
               gameBoard[i] = 3
            }
            if (contadorDeMinasAlrededor === 2) {
               gameBoard[i] = 2
            }
            if (contadorDeMinasAlrededor === 1) {
               gameBoard[i] = 1
            }
         } else {
            gameBoard[i] = 0
         }
         contadorDeMinasAlrededor = 0
      }
      if (estaEnElMargenArriba && !hayMina) {
         if (estaALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajo) {
            contadorDeMinasAlrededor++
         }
         if (estaALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajoALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajoALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (contadorDeMinasAlrededor !== 0) {
            if (contadorDeMinasAlrededor === 5) {
               gameBoard[i] = 5
            }
            if (contadorDeMinasAlrededor === 4) {
               gameBoard[i] = 4
            }
            if (contadorDeMinasAlrededor === 3) {
               gameBoard[i] = 3
            }
            if (contadorDeMinasAlrededor === 2) {
               gameBoard[i] = 2
            }
            if (contadorDeMinasAlrededor === 1) {
               gameBoard[i] = 1
            }
         } else {
            gameBoard[i] = 0
         }
         contadorDeMinasAlrededor = 0
      }
      if (estaEnElMargenAbajo && !hayMina) {
         if (estaALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (estaArriba) {
            contadorDeMinasAlrededor++
         }
         if (estaALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (estaArribaALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (estaArribaALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (contadorDeMinasAlrededor !== 0) {
            if (contadorDeMinasAlrededor === 5) {
               gameBoard[i] = 5
            }
            if (contadorDeMinasAlrededor === 4) {
               gameBoard[i] = 4
            }
            if (contadorDeMinasAlrededor === 3) {
               gameBoard[i] = 3
            }
            if (contadorDeMinasAlrededor === 2) {
               gameBoard[i] = 2
            }
            if (contadorDeMinasAlrededor === 1) {
               gameBoard[i] = 1
            }
         } else {
            gameBoard[i] = 0
         }
         contadorDeMinasAlrededor = 0
      }
      if (estaEnLaEsquinaArribaMargenDerecho && !hayMina) {
         if (estaALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajo) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajoALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (contadorDeMinasAlrededor !== 0) {
            if (contadorDeMinasAlrededor === 3) {
               gameBoard[i] = 3
            }
            if (contadorDeMinasAlrededor === 2) {
               gameBoard[i] = 2
            }
            if (contadorDeMinasAlrededor === 1) {
               gameBoard[i] = 1
            }
         } else {
            gameBoard[i] = 0
         }
         contadorDeMinasAlrededor = 0
      }
      if (estaEnElMargenDerecho && !hayMina) {
         if (estaALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajo) {
            contadorDeMinasAlrededor++
         }
         if (estaArriba) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajoALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (estaArribaALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (contadorDeMinasAlrededor !== 0) {
            if (contadorDeMinasAlrededor === 5) {
               gameBoard[i] = 5
            }
            if (contadorDeMinasAlrededor === 4) {
               gameBoard[i] = 4
            }
            if (contadorDeMinasAlrededor === 3) {
               gameBoard[i] = 3
            }
            if (contadorDeMinasAlrededor === 2) {
               gameBoard[i] = 2
            }
            if (contadorDeMinasAlrededor === 1) {
               gameBoard[i] = 1
            }
         } else {
            gameBoard[i] = 0
         }
         contadorDeMinasAlrededor = 0
      }
      if (estaEnLaEsquinaAbajoMargenDerecho && !hayMina) {
         if (estaALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (estaArriba) {
            contadorDeMinasAlrededor++
         }
         if (estaArribaALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (contadorDeMinasAlrededor !== 0) {
            if (contadorDeMinasAlrededor === 3) {
               gameBoard[i] = 3
            }
            if (contadorDeMinasAlrededor === 2) {
               gameBoard[i] = 2
            }
            if (contadorDeMinasAlrededor === 1) {
               gameBoard[i] = 1
            }
         } else {
            gameBoard[i] = 0
         }
         contadorDeMinasAlrededor = 0
      }
      if (!estaEnElMargenIzquierdo &&
         !hayMina &&
         !estaEnElMargenDerecho &&
         !estaEnElMargenArriba &&
         !estaEnElMargenAbajo &&
         !estaEnLaEsquinaAbajoMargenDerecho &&
         !estaEnLaEsquinaAbajoMargenIzquierdo &&
         !estaEnLaEsquinaArribaMargenDerecho &&
         !estaEnLaEsquinaArribaMargenIzquierdo) {
         if (estaArribaALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (estaArriba) {
            contadorDeMinasAlrededor++
         }
         if (estaArribaALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (estaALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (estaALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajoALaIzquierda) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajo) {
            contadorDeMinasAlrededor++
         }
         if (estaAbajoALaDerecha) {
            contadorDeMinasAlrededor++
         }
         if (contadorDeMinasAlrededor !== 0) {
            if (contadorDeMinasAlrededor === 8) {
               gameBoard[i] = 8
            }
            if (contadorDeMinasAlrededor === 7) {
               gameBoard[i] = 7
            }
            if (contadorDeMinasAlrededor === 6) {
               gameBoard[i] = 6
            }
            if (contadorDeMinasAlrededor === 5) {
               gameBoard[i] = 5
            }
            if (contadorDeMinasAlrededor === 4) {
               gameBoard[i] = 4
            }
            if (contadorDeMinasAlrededor === 3) {
               gameBoard[i] = 3
            }
            if (contadorDeMinasAlrededor === 2) {
               gameBoard[i] = 2
            }
            if (contadorDeMinasAlrededor === 1) {
               gameBoard[i] = 1
            }
         } else {
            gameBoard[i] = 0
         }
      }
      contadorDeMinasAlrededor = 0
   }
   rectangle.forEach((square, i) => {
      square.addEventListener('click', () => uncoverRectangles(square, i))
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
   container.innerHTML =  ''
   gameBoard = []
}

function win() {
   title.innerHTML = 'WIN'
}