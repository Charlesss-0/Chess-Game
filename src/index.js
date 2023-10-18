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

function displayBoard() {
    const board = document.getElementById('board')

    handleDragDropEvents(board)

    chessboard.forEach((row, rowIndex) => {
        row.forEach((piece, columnIndex) => {
            const square = document.createElement('div')
            square.classList.add(
                'square',
                'w-24',
                'h-24',
                rowIndex % 2 === columnIndex % 2 ? 'bg-gray-300' : 'bg-gray-500'
            )

            const king = 'fi fi-sr-chess-king'
            const queen = 'fi fi-sr-chess-queen'
            const rook = 'fi fi-sr-chess-rook-alt'
            const knight = 'fi fi-sr-chess-knight-alt'
            const bishop = 'fi fi-sr-chess-bishop'
            const pawn = 'fi fi-sr-chess-pawn-alt'

            const isWhitePiece = piece === piece.toUpperCase()
            const whiteBlack = isWhitePiece ? 'text-white' : 'text-black'

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
        })
    })
}
displayBoard()

function handleDragDropEvents(board) {
    let dragged

    board.addEventListener('dragstart', (e) => {
        dragged = e.target
    })

    board.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    board.addEventListener('dragenter', (e) => {
        if (e.target.classList.contains('square')) {
            e.target.classList.add('bg-green-300')
        }
    })

    board.addEventListener('dragleave', (e) => {
        if (e.target.classList.contains('square')) {
            e.target.classList.remove('bg-green-300')
        }
    })

    board.addEventListener('drop', (e) => {
        if (e.target.classList.contains('square')) {
            e.target.classList.remove('bg-green-300')

            e.target.appendChild(dragged)
        }
    })
}

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
