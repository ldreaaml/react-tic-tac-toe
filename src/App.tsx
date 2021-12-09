import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Board } from "./components/Board";
import { ResetButton } from "./components/ResetButton";

function App() {
  const initialState: string[] = ["", "", "", "", "", "", "", "", ""];
  const [gameState, setGameState] = useState<string[]>(initialState);

  const firstPlayer = "x";
  const [currentPlayer, setPlayerState] = useState<string>(firstPlayer);

  const changePlayer = () => {
    setPlayerState(currentPlayer === "x" ? "o" : "x");
  };

  const setValue = (index: number, player: string) => {
    if (gameState[index] === "") {
      const newGameState = [...gameState];
      console.log(`Player ${player} on ${index}`);
      newGameState[index] = player;
      setGameState(newGameState);
    }
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
        setValue={setValue}
      />
      <ResetButton handleReset={resetGame} />
    </>
  );
}

export default App;
