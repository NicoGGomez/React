import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square"
import { TURNS } from "./constants.js"
import { checkWinnerFrom, checkEndGame } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"

function App() {
  // DEFINE EL ESTADO INICIAL DEL TABLERO CON 
  // ESPACIOS EN BLANCO 
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  // DEFINE QUIEN VA A EMPEZAR A JUGAR
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // DEFINE ESTADO DE QUIEN GANA
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  // FUNCION PARA ACTUALIZAR EL TURNO DEL TABLERO, LE PASAMOS UN 
  // INDEX PARA PODER DETECTAR EN QUE POSICION SE HIZO CLICK
  const updateBoard = (index) => {
    // SI LA POSICION YA ESTA OCUPADA, NO HACER NADA
    if(board[index] || winner) return
    // NUEVO BOARD (hacemos una copia para no modificar el original) 
    // PARA ACTUALIZAR EL TABLERO Y COLOCAR EL TURNO
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // OPERADOR TERNARIO (SI EL TURNO ES IGUAL A X, ENTONCES O, SINO X) 
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X 
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    // REVISAR SI HAY UN GANADOR 
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      // LANZAMOS CONFETTI SI HAY UN GANADOR
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className="board">
            <h1>TRES EN RAYA</h1>
            <button onClick={resetGame}>reset del juego</button>
            <section className="game">
              {board.map((square,index)=> {
                return (
                  <Square 
                    key={index} 
                    index={index}
                    updateBoard={updateBoard}
                  >
                    {square}
                  </Square>
                )
              })
              }
            </section>

            <section className="turn">
              <Square isSelected={turn === TURNS.X}>
                {TURNS.X}
              </Square>
              <Square isSelected={turn === TURNS.O}>
                {TURNS.O}
              </Square>
            </section>

            <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )
}

export default App
