import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Board } from "./components/Board";
import { ResetButton } from "./components/ResetButton";

function App() {
  const initialState: string[] = ["x", "o", "x", "x", "o", "", "", "", ""];
  const [gameState, setGameState] = useState<string[]>(initialState);

  const resetGame = () => {
    setGameState(Array(9).fill(""));
  };

  return (
    <>
      <Board gameState={gameState} />
      <ResetButton handleReset={resetGame} />
    </>
  );
}

export default App;
