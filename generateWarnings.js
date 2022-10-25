//Function generate warning. Warn of the surrounding mines
let i

function generateWarning() {
   generateWarningsOnTheCorners()
   generateWarningOnTheMargin()
   generateWarningOnTheMiddle()
}

function generateWarningsOnTheCorners() {
   const isInTheTopCornerLeftMargin = i === 0
   const isInBottomCornerLeftMargin = i === 9
   const isInTheTopCornerRightMargin = i === 90
   const isInBottomCornerRightMargin = i === 99
   const isInTopLeft = gameBoard[i - 11] === -1
   const isInTop = gameBoard[i - 1] === -1
   const isInTopRight = gameBoard[i + 9] === -1
   const isOnTheLeft = gameBoard[i - 10] === -1
   const isOnTheRight = gameBoard[i + 10] === -1
   const isOnBottomLeft = gameBoard[i - 9] === -1
   const isOnBottom = gameBoard[i + 1] === -1
   const thereMine = gameBoard[i] === -1
   

   for (i = 0; i < gameBoard.length; i++) {
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
         // Esta linea sustituye al if else, por quitarnos codigo que es tipica
         gameBoard[i] = mineCounterAround !== 0 ? mineCounterAround : 0
         // if (mineCounterAround !== 0) {
         //    gameBoard[i] = mineCounterAround
         // } else {
         //    gameBoard[i] = 0
         // }
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
   }
}


function generateWarningOnTheMargin() {
   for (i = 0; i < gameBoard.length; i++) {
      const isInTopLeft = gameBoard[i - 11] === -1
      const isInTop = gameBoard[i - 1] === -1
      const isInTopRight = gameBoard[i + 9] === -1
      const isOnTheLeft = gameBoard[i - 10] === -1
      const isOnTheRight = gameBoard[i + 10] === -1
      const isOnBottomLeft = gameBoard[i - 9] === -1
      const isOnBottom = gameBoard[i + 1] === -1
      const thereMine = (gameBoard[i] === -1)
      const isOnBottomRight = gameBoard[i + 11] === -1
      const isOnTheLeftMargin = (i > 0) && (i < 9)
      const isOnTheRightMargin = i > 90 && i < 99
      const isInTheMarginTop = i % 10 === 0
      const isInTheMarginBottom = (i + 1) % 10 === 0
      
      
      const positions = [isOnTheRight, isOnBottom, isInTop, isOnBottomRight, isInTopRight]
      
      if (isOnTheLeftMargin && !thereMine) {
         // Con la linea de abajo nos quitamos los siguientes 5 ifs
         // mineCounterAround = positions.filter(position => position).length
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
   }
}

function generateWarningOnTheMiddle() {
   for (i = 0; i < gameBoard.length; i++) {
      const isInTopLeft = gameBoard[i - 11] === -1
      const isInTop = gameBoard[i - 1] === -1
      const isInTopRight = gameBoard[i + 9] === -1
      const isOnTheLeft = gameBoard[i - 10] === -1
      const isOnTheRight = gameBoard[i + 10] === -1
      const isOnBottomLeft = gameBoard[i - 9] === -1
      const isOnBottom = gameBoard[i + 1] === -1
      const thereMine = (gameBoard[i] === -1)
      const isOnBottomRight = gameBoard[i + 11] === -1
      const isOnTheLeftMargin = (i > 0) && (i < 9)
      const isOnTheRightMargin = i > 90 && i < 99
      const isInTheMarginTop = i % 10 === 0
      const isInTheMarginBottom = (i + 1) % 10 === 0
      const isInTheTopCornerLeftMargin = (i === 0)
      const isInBottomCornerLeftMargin = i === 9
      const isInTheTopCornerRightMargin = i === 90
      const isInBottomCornerRightMargin = i === 99
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
   })
}
