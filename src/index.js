function createGrid(n) {
    const board = document.getElementById('board')
    board.classList.add('grid', 'border-solid', 'border-2', 'border-black')

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const div = document.createElement('div')

            if ((i + j) % 2 === 0) {
                div.classList.add('bg-white')
            } else {
                div.classList.add('bg-neutral-700')
            }

            board.style.gridTemplateColumns = `repeat(${n}, 1fr)`
            board.style.gridTemplateRows = `repeat(${n}), 1fr`

            board.appendChild(div)
        }
    }
}
createGrid(8)

function knightMoves(square) {
    const img = document.createElement('img')
}
