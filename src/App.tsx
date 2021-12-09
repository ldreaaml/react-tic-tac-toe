import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Board } from "./components/Board";
import { ResetButton } from "./components/ResetButton";

function App() {
  const initialState: string[] = ["x", "o", "x", "x", "o", "", "", "", ""];
  const [gameState, setGameState] = useState<string[]>(initialState);

  const firstPlayer = "x";
  const [currentPlayer, setPlayerState] = useState<string>(firstPlayer);

  const changePlayer = () => {
    setPlayerState(currentPlayer === "x" ? "o" : "x");
  };

  const resetGame = () => {
    setGameState(Array(9).fill(""));
  };

  return (
    <>
      <Board
        gameState={gameState}
        currentPlayer={currentPlayer}
        changePlayer={changePlayer}
      />
      <ResetButton handleReset={resetGame} />
    </>
  );
}

export default App;
