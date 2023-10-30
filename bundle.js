/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Represents the chess board\nvar chessboard = [['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'], ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']];\nfunction displayBoard() {\n  var board = document.getElementById('board');\n  handleDragDropEvents(board);\n  chessboard.forEach(function (row, rowIndex) {\n    row.forEach(function (piece, colIndex) {\n      var square = document.createElement('div');\n      square.classList.add('square', 'w-24', 'h-24', rowIndex % 2 === colIndex % 2 ? 'bg-gray-300' : 'bg-gray-500');\n      var king = 'fi fi-sr-chess-king';\n      var queen = 'fi fi-sr-chess-queen';\n      var rook = 'fi fi-sr-chess-rook-alt';\n      var knight = 'fi fi-sr-chess-knight-alt';\n      var bishop = 'fi fi-sr-chess-bishop';\n      var pawn = 'fi fi-sr-chess-pawn-alt';\n\n      // Get white or black piece\n      var isWhitePiece = piece === piece.toUpperCase();\n      var whiteBlack = isWhitePiece ? 'text-white' : 'text-black';\n\n      // Render chess piece, and determines if it's white or black\n      switch (true) {\n        case piece === 'R':\n          square.innerHTML += getChessPiece(rook, whiteBlack);\n          break;\n        case piece === 'N':\n          square.innerHTML += getChessPiece(knight, whiteBlack);\n          break;\n        case piece === 'B':\n          square.innerHTML += getChessPiece(bishop, whiteBlack);\n          break;\n        case piece === 'Q':\n          square.innerHTML += getChessPiece(queen, whiteBlack);\n          break;\n        case piece === 'K':\n          square.innerHTML += getChessPiece(king, whiteBlack);\n          break;\n        case piece === 'P':\n          square.innerHTML += getChessPiece(pawn, whiteBlack);\n          break;\n        case piece === 'r':\n          square.innerHTML += getChessPiece(rook, whiteBlack);\n          break;\n        case piece === 'n':\n          square.innerHTML += getChessPiece(knight, whiteBlack);\n          break;\n        case piece === 'b':\n          square.innerHTML += getChessPiece(bishop, whiteBlack);\n          break;\n        case piece === 'q':\n          square.innerHTML += getChessPiece(queen, whiteBlack);\n          break;\n        case piece === 'k':\n          square.innerHTML += getChessPiece(king, whiteBlack);\n          break;\n        case piece === 'p':\n          square.innerHTML += getChessPiece(pawn, whiteBlack);\n          break;\n        case piece === ' ':\n          square.innerHTML += '';\n          break;\n      }\n      board.appendChild(square);\n      var kingMoves = getKingMoves(chessboard, rowIndex, colIndex);\n      console.log(kingMoves);\n    });\n  });\n}\ndisplayBoard();\nfunction handleDragDropEvents(board) {\n  var dragged;\n\n  // Set e.target to dragged variable\n  board.addEventListener('dragstart', function (e) {\n    dragged = e.target;\n  });\n\n  // Prevent default action on dragover\n  board.addEventListener('dragover', function (e) {\n    e.preventDefault();\n  });\n\n  // Change square color on dragenter event\n  board.addEventListener('dragenter', function (e) {\n    if (e.target.classList.contains('square')) {\n      e.target.classList.add('bg-green-300');\n    }\n  });\n\n  // Remove square color on dragleave event\n  board.addEventListener('dragleave', function (e) {\n    if (e.target.classList.contains('square')) {\n      e.target.classList.remove('bg-green-300');\n    }\n  });\n\n  // Move pieces around and update the DOM\n  board.addEventListener('drop', function (e) {\n    if (e.target.classList.contains('square')) {\n      e.target.classList.remove('bg-green-300');\n      e.target.appendChild(dragged);\n    }\n  });\n\n  // Show pieces moves on click event\n  board.addEventListener('click', function () {});\n}\n\n// Generates an HTML representation of a chess piece\nfunction getChessPiece(piece, type) {\n  return (/* HTML */\"\\n        <i\\n            class=\\\"\\n            w-full\\n            h-full\\n            cursor-grab\\n            text-6xl\\n            shadow-thin\\n            grid\\n            place-content-center\\n            chessPiece\\n            \".concat(piece, \"\\n            \").concat(type, \"\\n            \\\"\\n            draggable=\\\"true\\\"\\n        ></i>\\n    \")\n  );\n}\nfunction getKingMoves(chessboard, row, col) {\n  var possibleMoves = [];\n\n  // Define possible relatives coordinates for king's moves\n  var moveOffsets = [{\n    dx: -1,\n    dy: -1\n  }, {\n    dx: -1,\n    dy: 0\n  }, {\n    dx: -1,\n    dy: 1\n  }, {\n    dx: 0,\n    dy: -1\n  }, {\n    dx: 0,\n    dy: 1\n  }, {\n    dx: 1,\n    dy: -1\n  }, {\n    dx: 1,\n    dy: 0\n  }, {\n    dx: 1,\n    dy: 1\n  }];\n  for (var _i = 0, _moveOffsets = moveOffsets; _i < _moveOffsets.length; _i++) {\n    var offset = _moveOffsets[_i];\n    var newRow = row + offset.dx;\n    var newCol = col + offset.dy;\n    if (isSquareValid(newRow, newCol) && !isSameColorPiece(chessboard, row, col, newRow, newCol)) {\n      possibleMoves.push({\n        row: newRow,\n        col: newCol\n      });\n    }\n  }\n  return possibleMoves;\n}\n\n// Defines the boundaries for the chessboard\nfunction isSquareValid(row, col) {\n  return row >= 0 && col >= 0 && row < 8 && col < 8;\n}\nfunction isSameColorPiece(chessboard, fromRow, fromCol, toRow, toCol) {\n  var piece = chessboard[fromRow][fromCol];\n  var targetPiece = chessboard[toRow][toCol];\n  if (piece !== ' ' && targetPiece !== ' ') {\n    return piece.toLowerCase() === targetPiece.toLowerCase();\n  }\n  return false;\n}\n\n// const kingMoves = getKingMoves(chessboard, 4, 4)\n// console.log(kingMoves)\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;