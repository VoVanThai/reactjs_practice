import { useState } from "react";
import { Board } from "./Board";
import { Board16 } from "./Board16";

export function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
    const [isBoard9, setIsBoard9] = useState(true)
    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
    }

    const moves = history.map((squares, move) => {
        let desc
        if (move > 0) {
            desc = 'Go to move #' + move
        } else {
            desc = 'Go to game start'
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)} >{desc}</button>
            </li>
        )
    })

    function renderBoard16() {
        setIsBoard9(false)
    }

    function resetBoard() {
        const newSquares = Array(isBoard9 ? 9 : 16).fill(null);
        setHistory([newSquares]); 
        setCurrentMove(0); 
      }

    return (
        <div className="game" >
            <button onClick={renderBoard16}>Board 16</button>
            <button onClick={() => {setIsBoard9(true)}}>Board 9</button>
            <button onClick={resetBoard}>Reset</button>
            <div className="game-board" style={{marginLeft: '300px', marginTop: '50px'}}>
                {isBoard9 ? (
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                ) : (
                    <Board16 xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                )
                }
            </div>
            <div className="game-info" style={{float:"right", position:"fixed", top: 120, right: 500}}>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

