// import axios from "axios";
// import React, { useEffect, useState } from "react";
// const Tiktak = () => {
//     let [state,setState]=useState([]);
//     let[another,useAnother]=useState()
//     function Use(){
//       useEffect(()=>{
//         let api="http://localhost:2050/data";
//         axios.get(api).then((xor)=>setState(xor));
//        })
//     }
 
//   return (
//     <div>
//        <table border={4}>
//         <tr>
//           <button onClick={Use}> <td >x</td></button>
//           <button onClick={Use}> <td >0</td></button>
//           <button onClick={Use}> <td >x</td></button>
//         </tr>
//         <tr>
//         <button onClick={Use}> <td >0</td></button>
//         <button onClick={Use}> <td >x</td></button>
//         <button onClick={Use}> <td >x</td></button>
//         </tr>
//         <tr>
//         <button onClick={Use}> <td >x</td></button>
//         <button onClick={Use}> <td >0</td></button>
//         <button onClick={Use}> <td >x</td></button>
//         </tr>
       
//        </table>
//     </div>
//   )
// }

import React, { useState } from 'react';
import "../Tiktak/Tiktaak.css";

const TicTacToe = () => {
  const [state, setBoard] = useState(Array(9).fill(null));
  const [Next, setNext] = useState(false);
  const [winner, setWinner] = useState(null);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (board.every(Boolean)) {
      setWinner('Draw');
    }
  };

  const print = (index) => {
    if (state[index] || winner) return; // Prevent overriding moves or playing after a win

    let newBoard = state.slice();
    newBoard[index] = Next ? 'X' : 'O';
    setBoard(newBoard);
    setNext(!Next);
    checkWinner(newBoard);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setNext(false);
    setWinner(null);
  };

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
      <div className={`board ${winner ? 'disabled' : ''}`}>
        {state.map((x, index) => (
          <button key={index} onClick={() => print(index)} className="cell">
            {x}
          </button>
        ))}
      </div>
      {winner && (
        <div className="winner">
          <h2>{winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`}</h2>
          <button onClick={resetGame} className="reset-button">
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;













