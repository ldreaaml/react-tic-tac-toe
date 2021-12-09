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

  return (
    <>
      <Board
        gameState={gameState}
        currentPlayer={currentPlayer}
        setValue={setValue}
      />
      <ResetButton handleReset={resetGame} />
    </>
  );
}

export default App;
