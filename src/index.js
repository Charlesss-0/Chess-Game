import { placeInitialPieces } from './pieces' // Function to place the initial chess pieces on the board
import { DragEvents } from './pieces' // Function to set event listeners on the squares

const chessboard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
]

// Create the chess board grid
createGrid(8)

// Create grid board and place initial chess pieces
function createGrid(n) {
    const board = document.getElementById('board')
    board.classList.add('grid', 'board-border')

    // Create the grid squares
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const square = createSquares(i, j, n)
            square.classList.add((i + j) % 2 === 0 ? 'beige' : 'dark')

            board.appendChild(square)
        }
    }

    // Place initial chess pieces on the board
    placeInitialPieces(n)
}

// Create a grid square element
function createSquares(x, y, n) {
    const square = document.createElement('div')

    square.classList.add('flex', 'justify-center', 'items-center')

    board.style.gridTemplateColumns = `repeat(${n}, 1fr)`
    board.style.gridTemplateRows = `repeat(${n}, 1fr)`

    const drag = DragEvents(square)
    drag.setDragEvents()

    return square
}
