import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    // REVISAMOS TODAS LAS COMBINACIONES GANADORAS PARA VER 
    // SI X U O GANO
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
        return boardToCheck[a]
    }
  }
  // SI NO HAY GANADOR, RETORNAMOS NULL
  return null
  }

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}