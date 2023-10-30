// Represents the chess board
const chessboard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
]

module.exports = displayBoard

function displayBoard() {
    const board = document.getElementById('board')

    handleDragDropEvents(board)

    chessboard.forEach((row, rowIndex) => {
        row.forEach((piece, colIndex) => {
            const square = document.createElement('div')
            square.classList.add(
                'square',
                'w-24',
                'h-24',
                rowIndex % 2 === colIndex % 2 ? 'bg-gray-300' : 'bg-gray-500'
            )

            const king = 'fi fi-sr-chess-king'
            const queen = 'fi fi-sr-chess-queen'
            const rook = 'fi fi-sr-chess-rook-alt'
            const knight = 'fi fi-sr-chess-knight-alt'
            const bishop = 'fi fi-sr-chess-bishop'
            const pawn = 'fi fi-sr-chess-pawn-alt'

            // Get white or black piece
            const isWhitePiece = piece === piece.toUpperCase()
            const whiteBlack = isWhitePiece ? 'text-white' : 'text-black'

            // Render chess piece, and determines if it's white or black
            switch (true) {
                case piece === 'R':
                    square.innerHTML += getChessPiece(rook, whiteBlack)
                    break
                case piece === 'N':
                    square.innerHTML += getChessPiece(knight, whiteBlack)
                    break
                case piece === 'B':
                    square.innerHTML += getChessPiece(bishop, whiteBlack)
                    break
                case piece === 'Q':
                    square.innerHTML += getChessPiece(queen, whiteBlack)
                    break
                case piece === 'K':
                    square.innerHTML += getChessPiece(king, whiteBlack)
                    break
                case piece === 'P':
                    square.innerHTML += getChessPiece(pawn, whiteBlack)
                    break
                case piece === 'r':
                    square.innerHTML += getChessPiece(rook, whiteBlack)
                    break
                case piece === 'n':
                    square.innerHTML += getChessPiece(knight, whiteBlack)
                    break
                case piece === 'b':
                    square.innerHTML += getChessPiece(bishop, whiteBlack)
                    break
                case piece === 'q':
                    square.innerHTML += getChessPiece(queen, whiteBlack)
                    break
                case piece === 'k':
                    square.innerHTML += getChessPiece(king, whiteBlack)
                    break
                case piece === 'p':
                    square.innerHTML += getChessPiece(pawn, whiteBlack)
                    break
                case piece === ' ':
                    square.innerHTML += ''
                    break
            }

            board.appendChild(square)

            const kingMoves = getKingMoves(chessboard, rowIndex, colIndex)
            console.log(kingMoves)
        })
    })
}
displayBoard()

function handleDragDropEvents(board) {
    let dragged

    // Set e.target to dragged variable
    board.addEventListener('dragstart', (e) => {
        dragged = e.target
    })

    // Prevent default action on dragover
    board.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    // Change square color on dragenter event
    board.addEventListener('dragenter', (e) => {
        if (e.target.classList.contains('square')) {
            e.target.classList.add('bg-green-300')
        }
    })

    // Remove square color on dragleave event
    board.addEventListener('dragleave', (e) => {
        if (e.target.classList.contains('square')) {
            e.target.classList.remove('bg-green-300')
        }
    })

    // Move pieces around and update the DOM
    board.addEventListener('drop', (e) => {
        if (e.target.classList.contains('square')) {
            e.target.classList.remove('bg-green-300')

            e.target.appendChild(dragged)
        }
    })

    // Show pieces moves on click event
    board.addEventListener('click', () => {})
}

// Generates an HTML representation of a chess piece
function getChessPiece(piece, type) {
    return /* HTML */ `
        <i
            class="
            w-full
            h-full
            cursor-grab
            text-6xl
            shadow-thin
            grid
            place-content-center
            chessPiece
            ${piece}
            ${type}
            "
            draggable="true"
        ></i>
    `
}

function getKingMoves(chessboard, row, col) {
    const possibleMoves = []

    // Define possible relatives coordinates for king's moves
    const moveOffsets = [
        { dx: -1, dy: -1 },
        { dx: -1, dy: 0 },
        { dx: -1, dy: 1 },
        { dx: 0, dy: -1 },
        { dx: 0, dy: 1 },
        { dx: 1, dy: -1 },
        { dx: 1, dy: 0 },
        { dx: 1, dy: 1 }
    ]

    for (let offset of moveOffsets) {
        const newRow = row + offset.dx
        const newCol = col + offset.dy

        if (
            isSquareValid(newRow, newCol) &&
            !isSameColorPiece(chessboard, row, col, newRow, newCol)
        ) {
            possibleMoves.push({ row: newRow, col: newCol })
        }
    }

    return possibleMoves
}

// Defines the boundaries for the chessboard
function isSquareValid(row, col) {
    return row >= 0 && col >= 0 && row < 8 && col < 8
}

function isSameColorPiece(chessboard, fromRow, fromCol, toRow, toCol) {
    const piece = chessboard[fromRow][fromCol]
    const targetPiece = chessboard[toRow][toCol]

    if (piece !== ' ' && targetPiece !== ' ') {
        return piece.toLowerCase() === targetPiece.toLowerCase()
    }

    return false
}
