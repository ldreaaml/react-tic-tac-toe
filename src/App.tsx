import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { ResetButton } from "./components/ResetButton";

function App() {
  const initialState: string[] = ["", "", "", "", "", "", "", "", ""];
  const [gameState, setGameState] = useState<string[]>(initialState);

  const firstPlayer = "x";
  const [currentPlayer, setPlayerState] = useState<string>(firstPlayer);

  const swapPlayer = () => {
    setPlayerState(currentPlayer === "x" ? "o" : "x");
  };

  //fill empty square with x/o
  const setValue = (index: number, player: string) => {
    if (gameState[index] === "") {
      const newGameState = [...gameState];
      console.log(`Player ${player} on ${index}`);
      newGameState[index] = player;
      setGameState(newGameState);
      swapPlayer();
    }
  };

  //reset game to initial state
  const resetGame = () => {
    setGameState(Array(9).fill(""));
  };

  //check if we have a winner
  const declareWinner = (gameState: string[]) => {
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
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return "";
  };

  return (
    <>
      <Board
        gameState={gameState}
        currentPlayer={currentPlayer}
        setValue={setValue}
        declareWinner={declareWinner}
      />
      <ResetButton handleReset={resetGame} />
    </>
  );
}

export default App;
