// Black pieces
import kingBlack from './assets/king-black.png'
import queenBlack from './assets/queen-black.png'
import rookBlack from './assets/rook-black.png'
import knightBlack from './assets/knight-black.png'
import bishopBlack from './assets/bishop-black.png'
import pawnBlack from './assets/pawn-black.png'
// white pieces
import kingWhite from './assets/king-white.png'
import queenWhite from './assets/queen-white.png'
import rookWhite from './assets/rook-white.png'
import knightWhite from './assets/knight-white.png'
import bishopWhite from './assets/bishop-white.png'
import pawnWhite from './assets/pawn-white.png'

let beingDragged

// Create grid board and place initial chess pieces
function createGrid(n) {
    const board = document.getElementById('board')
    board.classList.add('grid', 'board-border')

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const square = createSquares(i, j, n)
            board.appendChild(square)
        }
    }

    placeInitialPieces(n)
}

function createSquares(i, j, n) {
    const square = document.createElement('div')
    square.classList.add('flex', 'justify-center', 'items-center')
    square.classList.add((i + j) % 2 === 0 ? 'beige' : 'dark')

    board.style.gridTemplateColumns = `repeat(${n}, 1fr)`
    board.style.gridTemplateRows = `repeat(${n}, 1fr)`

    square.addEventListener('dragover', dragOver)
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragend', dragEnd)
    square.dataset.position = `${i}-${j}`

    return square
}

function placeInitialPieces(n) {
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

// Creates a chess piece depending on the argument
function placePiece(x, y, n, piece, name) {
    const img = document.createElement('img')
    img.src = piece
    img.classList.add('w-full', 'p-2', 'cursor-grab', `${name}`)
    img.id = `${piece}-${x}-${y}`
    img.draggable = true

    const square = document.querySelector(
        `#board > div[data-position="${y}-${x}"]`,
    )

    img.addEventListener('dragstart', (e) => {
        beingDragged = e.target
    })

    getPieceMove(x, y, n, img)

    square.appendChild(img)
}

function getPieceMove(x, y, n, piece) {
    let target
    piece.addEventListener('click', (e) => {
        target = e.target

        const pawnWhite = target.classList.contains('pawn-white')

        if (pawnWhite) {
            getPawnMoves([x, y], n, true)
        } else {
            getPawnMoves([x, y], n, false)
        }
    })
}

function getPawnMoves(currentPosition, n, isWhite) {
    const moves = []
    const [x, y] = currentPosition

    const direction = isWhite ? -1 : 1

    moves.push([x, y + direction])

    if ((isWhite && y === 6) || (!isWhite && y === 1)) {
        moves.push([x, y + 2 * direction])
    }

    moves.push([x - 1, y + direction])
    moves.push([x + 1, y + direction])

    const pawnEl = document.querySelector(
        `#board > div[data-position="${y}-${x}"])`,
    )

    pawnEl.addEventListener('click', (e) => {
        moves.forEach(([newX, newY]) => {
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                const square = document.querySelector(
                    `#board > div[data-position="${newY}-${newX}"]`,
                )
                square.classList.add(
                    'border-solid',
                    'border-2',
                    'border-green-600',
                )
            }
            console.log(e.target)
        })
    })

    return moves.filter(
        ([newX, newY]) => newX >= 0 && newX < 8 && newY >= 0 && newY < 8,
    )
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.target.classList.add('green')
}

function dragLeave(e) {
    e.target.classList.remove('green')
}

function dragDrop(e) {
    e.target.append(beingDragged)
    e.target.classList.remove('green')
}

function dragEnd(e) {
    e.target.classList.remove('green')
}

createGrid(8)
