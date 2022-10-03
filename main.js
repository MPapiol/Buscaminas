let columnas = 0
let filas = 3
let numberMinas = 1
let contadorParaWin = 0
let tablero = []
const title = document.getElementById('title')
const play = document.getElementById('play').addEventListener('click', startGame)
let container = document.querySelector('.container')
let columna
let rectangle
function startGame() {
   for (let i = 0; i <= filas; i++) {
      columna = document.createElement('div');
      columna.classList.add('columna');
      container.appendChild(columna)
      for (let j = 0; j <= columnas; j++) {
         rectangle = document.createElement('div')
         rectangle.classList.add('rectangle')
         columna.appendChild(rectangle)
         tablero.splice(j, 0, rectangle)
      }
   }
   const rectangles = document.querySelectorAll('.rectangle')
   rectangles.forEach((rectangle, i) => {
      rectangle.addEventListener('click', () => destapar(rectangle, i))
   })
   colocarMinas()
}

function colocarMinas() {
   do {
      let numberRandom = Math.floor(Math.random() * 4)
      tablero[numberRandom] = -1
      numberMinas++
   } while (numberMinas < 1)

   generarWarning()
}

function generarWarning() {
   for (let i = 0; i < tablero.length; i++) {
      if (tablero[i] !== -1) {
         if (tablero[i - 1] === -1 || tablero[i + 1] === -1) {
            tablero[i] = 1
         } else {
            tablero[i] = 0
         }
      }
   }
   console.log(tablero)
}

function destapar(rectangle, i) {
   rectangle.innerHTML = tablero[i]
   if (tablero[i] !== -1) {
      if (contadorParaWin < tablero.length - numberMinas) {
         contadorParaWin++
      } else {
         win()
      }
   } else {
      gameOver()
   }


}

function gameOver() {
   title.innerHTML = 'GAME OVER!!!'
   tablero = []
   for (let i = 0; i <= filas; i++) {
      columna.node.removeChild(container)
   }
}

function win() {
   title.innerHTML = 'WIN!!!'
}