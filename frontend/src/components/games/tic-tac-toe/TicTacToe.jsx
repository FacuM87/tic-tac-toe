import { useState } from 'react'
import './TicTacToe.css'

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXturn, setXturn] = useState(true)

    const checkWinner = (board) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], //columnas
            [0, 4, 8], [2, 4, 6] //diagonales
        ]

        for (let combination of winningCombinations) {
            const [a, b, c] = combination

            if (board[a] && board[a] === board[b] && board[a] === board[c]) { return board[a] }

        }
        return null
    }

    const handleClick = (index) => {
        if (board[index] || checkWinner(board)) { return }

        const newBoard = [...board]
        newBoard[index] = isXturn ? "X" : "O"


        setBoard(newBoard)
        setXturn(!isXturn)

        setTimeout(() => {
            const winner = checkWinner(newBoard)
            winner && alert("El ganador es: " + winner)
        }, 100)

        setTimeout(() => {
            if (!newBoard.includes(null)) { return alert("Empate!") }
        })

    }

    return (
        <main className='juego'>
            <h1>Tic Tac Toe</h1>
            <div className='grilla'>
                {board.map((cuadrado, index) => <button className='cuadrado' key={index} onClick={() => handleClick(index)}>{cuadrado}</button>)}
            </div>
            <div>
                <button onClick={() => { setBoard(Array(9).fill(null)) }}> Reset </button>
            </div>
        </main>

    )
}

export default TicTacToe