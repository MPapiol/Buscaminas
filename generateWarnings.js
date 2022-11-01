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
   const isOnBottomRight = gameBoard[i + 11] === -1
   const isOnBottom = gameBoard[i + 1] === -1
   const thereMine = gameBoard[i] === -1
   const positionsInTopLeftCorner = [isOnTheRight, isOnBottom, isOnBottomRight]
   const positionsInBottomLeftCorner = [isOnTheRight, isInTop, isInTopRight]
   const positionsInTopRightCorner = [isOnTheLeft, isOnBottom, isOnBottomLeft]
   const positionsInBottomRightCorner = [isOnTheLeft, isInTop, isInTopLeft]
   for (i = 0; i < gameBoard.length; i++) {
      if (isInTheTopCornerLeftMargin && !thereMine) {
         mineCounterAround = positionsInTopLeftCorner.filter(position => position).length
         gameBoard[i] = mineCounterAround !== 0 ? mineCounterAround : 0
         mineCounterAround = 0
      }

      if (isInBottomCornerLeftMargin && !thereMine) {
         mineCounterAround = positionsInBottomLeftCorner.filter(position => position).length
         gameBoard[i] = mineCounterAround !== 0 ? mineCounterAround : 0
         mineCounterAround = 0
      }

      if (isInTheTopCornerRightMargin && !thereMine) {
         mineCounterAround = positionsInTopRightCorner.filter(position => position).length
         gameBoard[i] = mineCounterAround !== 0 ? mineCounterAround : 0
         mineCounterAround = 0
      }

      if (isInBottomCornerRightMargin && !thereMine) {
         mineCounterAround = positionsInBottomRightCorner.filter(position => position).length
         gameBoard[i] = mineCounterAround !== 0 ? mineCounterAround : 0
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
      const positionsOnLeftMargin = [isOnTheRight, isOnBottom, isInTop, isOnBottomRight, isInTopRight]
      const positionsOnMarginTop = [isOnTheRight, isOnBottom, isOnTheLeft, isOnBottomRight, isOnBottomLeft]
      const positionsOnMarginBottom = [isOnTheRight, isInTop, isOnTheLeft, isInTopRight, isInTopLeft]
      const positionsOnRightMargin = [isOnTheLeft, isOnBottom, isInTop, isOnBottomLeft, isInTopLeft]
      if (isOnTheLeftMargin && !thereMine) {
         mineCounterAround = positionsOnLeftMargin.filter(position => position).length
         gameBoard[i] = mineCounterAround !== 0 ? mineCounterAround : 0
         mineCounterAround = 0
      }
      if (isInTheMarginTop && !thereMine) {
         mineCounterAround = positionsOnMarginTop.filter(position => position).length
         gameBoard[i] = mineCounterAround !== 0 ? mineCounterAround : 0
         mineCounterAround = 0
      }
      if (isInTheMarginBottom && !thereMine) {
         mineCounterAround = positionsOnMarginBottom.filter(position => position).length
         gameBoard[i] = mineCounterAround !== 0 ? mineCounterAround : 0
         mineCounterAround = 0
      }
      if (isOnTheRightMargin && !thereMine) {
         mineCounterAround = positionsOnRightMargin.filter(position => position).length
         gameBoard[i] = mineCounterAround !== 0 ? mineCounterAround : 0
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
      const positionsMiddle = [isInTopLeft, isInTop, isInTopRight, isOnTheLeft, isOnTheRight, isOnBottomLeft, isOnBottom, isOnBottomRight]
      if (!isOnTheLeftMargin &&
         !thereMine &&
         !isOnTheRightMargin &&
         !isInTheMarginTop &&
         !isInTheMarginBottom &&
         !isInBottomCornerRightMargin &&
         !isInBottomCornerLeftMargin &&
         !isInTheTopCornerRightMargin &&
         !isInTheTopCornerLeftMargin) {
         mineCounterAround = positionsMiddle.filter(position => position).length
         gameBoard[i] = mineCounterAround !== 0 ? mineCounterAround : 0
      }
      mineCounterAround = 0
   }
   state = 'playing'

   rectangle.forEach((square, i) => {
      square.addEventListener('click', () => uncoverRectangles(square, i))
   })
}