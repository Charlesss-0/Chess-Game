import king from './assets/king.png'
import queen from './assets/queen.png'
import rook from './assets/rook.png'
import knight from './assets/knight.png'
import bishop from './assets/bishop.png'
import pawn from './assets/pawn.png'

function Board(n) {
    return {
        createGrid() {
            const board = document.getElementById('board')
            board.classList.add(
                'grid',
                'border-solid',
                'border-2',
                'border-black',
            )

            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    const div = document.createElement('div')
                    div.classList.add('flex', 'justify-center', 'items-center')

                    div.classList.add(
                        (i + j) % 2 === 0 ? 'bg-white' : 'bg-gray-600',
                    )

                    board.style.gridTemplateColumns = `repeat(${n}, 1fr)`
                    board.style.gridTemplateRows = `repeat(${n}, 1fr)`

                    board.appendChild(div)
                }
            }

            this.placePiece(7, 4, n, king)
            this.placePiece(7, 3, n, queen)
            this.placePiece(7, 7, n, rook)
            this.placePiece(7, 0, n, rook)
            this.placePiece(7, 2, n, bishop)
            this.placePiece(7, 5, n, bishop)
            this.placePiece(7, 1, n, knight)
            this.placePiece(7, 6, n, knight)
            this.placePiece(6, 0, n, pawn)
            this.placePiece(6, 1, n, pawn)
            this.placePiece(6, 2, n, pawn)
            this.placePiece(6, 3, n, pawn)
            this.placePiece(6, 4, n, pawn)
            this.placePiece(6, 5, n, pawn)
            this.placePiece(6, 6, n, pawn)
            this.placePiece(6, 7, n, pawn)
        },

        placePiece(x, y, n, piece) {
            const img = document.createElement('img')
            img.src = piece
            img.classList.add('w-5/6')
            img.draggable = true
            img.id = `${piece}-${x}-${y}`

            const square = document.querySelector(
                `#board > div:nth-child(${x * n + y + 1})`,
            )

            square.appendChild(img)

            img.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/uri-list', piece)
                e.dataTransfer.effectAllowed = 'move'
            })

            square.addEventListener('dragover', (e) => {
                e.preventDefault()
            })

            square.addEventListener('drop', (e) => {
                e.preventDefault()
                const draggedPiece = e.dataTransfer.getData('text/uri-list')
                if (draggedPiece === piece) {
                    square.appendChild(
                        document.getElementById(`${draggedPiece}-${x}-${y}`),
                    )
                }
            })
        },
    }
}
Board(8).createGrid()
