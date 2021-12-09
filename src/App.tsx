import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { GameStatus } from "./components/GameStatus";
import { ResetButton } from "./components/ResetButton";

function App() {
  const initialState: string[] = ["", "", "", "", "", "", "", "", ""];
  const [gameState, setGameState] = useState<string[]>(initialState);

  const firstPlayer = "x";
  const [currentPlayer, setPlayerState] = useState<string>(firstPlayer);

  // status = ['win','tie','playing']
  const [gameStatus, setGameStatus] = useState<string>("playing");

  //fill empty square with x/o
  const setValue = (index: number) => {
    if (gameState[index] === "" && gameStatus === "playing") {
      // console.log(`Player ${currentPlayer} on ${index}`);
      const newGameState = [...gameState];
      newGameState[index] = currentPlayer;
      setGameState(newGameState);
      updateGameStatus(newGameState);
    }
  };

  const updateGameStatus = (gameState: string[]) => {
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
    //find winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        setGameStatus("win");
        return;
      }
    }
    //if winner not found, check for draw
    if (gameState.indexOf("") === -1) {
      setGameStatus("tie");
    }
    //no winner found and is not tie, keep playing
    swapPlayer();
  };

  const swapPlayer = () => {
    setPlayerState(currentPlayer === "x" ? "o" : "x");
  };

  //reset game to initial state
  const resetGame = () => {
    setGameState(Array(9).fill(""));
    setGameStatus("playing");
  };

  return (
    <>
      <Board gameState={gameState} setValue={setValue} />
      <GameStatus gameStatus={gameStatus} currentPlayer={currentPlayer} />
      <ResetButton handleReset={resetGame} />
    </>
  );
}

export default App;
