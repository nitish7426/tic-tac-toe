import React, { useState } from "react";
import Square from "./components/Square";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const App = () => {
  const [squareValues, setSquareValues] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const reset = () => {
    setSquareValues(Array(9).fill(null));
    setIsXNext(false);
  };

  const handleSquareClick = (index) => {
    if (calculateWinner(squareValues) || squareValues[index]) {
      return;
    }
    const newSquareValues = squareValues.slice();
    if (isXNext) {
      newSquareValues[index] = "X";
    } else {
      newSquareValues[index] = "O";
    }
    setSquareValues(newSquareValues);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squareValues);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  return (
    <div className="flex items-center justify-center h-screen dark:bg-gray-800 flex-col dark:text-gray-400 space-y-4">
      <h1 className="text-5xl font-semibold">Tic Tac Toe</h1>
      <div className="w-fit grid grid-cols-3 border-4 rounded-xl border-gray-600 gap-1 bg-gray-600 overflow-hidden">
        {squareValues.map((value, i) => (
          <Square
            key={i}
            squareValue={value}
            onClick={() => handleSquareClick(i)}
          />
        ))}
      </div>
      <p className="text-xl font-semibold">{status}</p>
      <button
        className="py-2 px-5 rounded-md bg-gray-700 text-gray-200 font-semibold hover:bg-opacity-90 "
        onClick={reset}
      >
        Reset Game
      </button>
    </div>
  );
};

export default App;
