// Import chess piece images for black and white
import kingBlack from './assets/king-black.png'
import queenBlack from './assets/queen-black.png'
import rookBlack from './assets/rook-black.png'
import knightBlack from './assets/knight-black.png'
import bishopBlack from './assets/bishop-black.png'
import pawnBlack from './assets/pawn-black.png'
import kingWhite from './assets/king-white.png'
import queenWhite from './assets/queen-white.png'
import rookWhite from './assets/rook-white.png'
import knightWhite from './assets/knight-white.png'
import bishopWhite from './assets/bishop-white.png'
import pawnWhite from './assets/pawn-white.png'

export function placeInitialPieces(n) {
    // Place white pieces
    placePiece(4, 7, n, kingWhite, 'king-white')
    placePiece(3, 7, n, queenWhite, 'queen-white')
    placePiece(0, 7, n, rookWhite, 'rook-white')
    placePiece(7, 7, n, rookWhite, 'rook-white')
    placePiece(2, 7, n, bishopWhite, 'bishop-white')
    placePiece(5, 7, n, bishopWhite, 'bishop-white')
    placePiece(1, 7, n, knightWhite, 'knight-white')
    placePiece(6, 7, n, knightWhite, 'knight-white')
    placePiece(0, 6, n, pawnWhite, 'pawn-white')
    placePiece(1, 6, n, pawnWhite, 'pawn-white')
    placePiece(2, 6, n, pawnWhite, 'pawn-white')
    placePiece(3, 6, n, pawnWhite, 'pawn-white')
    placePiece(4, 6, n, pawnWhite, 'pawn-white')
    placePiece(5, 6, n, pawnWhite, 'pawn-white')
    placePiece(6, 6, n, pawnWhite, 'pawn-white')
    placePiece(7, 6, n, pawnWhite, 'pawn-white')

    // Place black pieces
    placePiece(4, 0, n, kingBlack, 'king-black')
    placePiece(3, 0, n, queenBlack, 'queen-black')
    placePiece(7, 0, n, rookBlack, 'rook-black')
    placePiece(0, 0, n, rookBlack, 'rook-black')
    placePiece(2, 0, n, bishopBlack, 'bishop-black')
    placePiece(5, 0, n, bishopBlack, 'bishop-black')
    placePiece(1, 0, n, knightBlack, 'knight-black')
    placePiece(6, 0, n, knightBlack, 'knight-black')
    placePiece(0, 1, n, pawnBlack, 'pawn-black')
    placePiece(1, 1, n, pawnBlack, 'pawn-black')
    placePiece(2, 1, n, pawnBlack, 'pawn-black')
    placePiece(3, 1, n, pawnBlack, 'pawn-black')
    placePiece(4, 1, n, pawnBlack, 'pawn-black')
    placePiece(5, 1, n, pawnBlack, 'pawn-black')
    placePiece(6, 1, n, pawnBlack, 'pawn-black')
    placePiece(7, 1, n, pawnBlack, 'pawn-black')
}

let beingDragged
function placePiece(x, y, n, piece, name) {
    const img = document.createElement('img')
    img.src = piece
    img.classList.add('w-full', 'p-2', 'cursor-grab', `${name}`)
    img.draggable = true

    const square = document.querySelector(
        `#board > div:nth-child(${y * n + x + 1})`,
    )

    img.addEventListener('dragstart', (e) => {
        beingDragged = e.target
    })

    square.appendChild(img)
}

export function DragEvents(square) {
    return {
        setDragEvents() {
            square.addEventListener('dragover', this.dragOver)
            square.addEventListener('dragenter', this.dragEnter)
            square.addEventListener('dragleave', this.dragLeave)
            square.addEventListener('drop', this.dragDrop)
        },

        dragOver(e) {
            e.preventDefault()
        },
        dragEnter(e) {
            e.target.classList.add('green')
        },
        dragLeave(e) {
            e.target.classList.remove('green')
        },
        dragDrop(e) {
            e.target.classList.remove('green')

            e.target.append(beingDragged)
        },
    }
}

function isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8
}

function getPawnMoves(x, y, board) {
    const moves = []
    const direction = board[y][x] === 'P' ? -1 : 1

    if (isValidMove(x, y + direction) && board[y + direction][x] === ' ') {
        moves.push([x, y + direction])
    }

    if (
        isValidMove(x - 1, y + direction) &&
        board[y + direction][x - 1] !== ' '
    ) {
        moves.push([x - 1, y + direction])
    }

    if (
        isValidMove(x + 1, y + direction) &&
        board[y + direction][x + 1] !== ' '
    ) {
        moves.push([x + 1, y + direction])
    }

    return moves
}

function getKnightMoves(x, y, board) {
    const moves = []
    const knightMoves = [
        [-2, -1],
        [-2, 1],
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2],
        [2, -1],
        [2, 1],
    ]

    for (let [dx, dy] of knightMoves) {
        if (isValidMove(x + dx, y + dy) && board[y + dy][x + dx] === ' ') {
            moves.push([x + dx, y + dy])
        }
    }

    return moves
}

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

const pawnMoves = getKnightMoves(5, 3, chessboard)
console.log('Pawn moves: ', pawnMoves)
