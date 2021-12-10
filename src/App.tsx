import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { GameStatus } from "./components/GameStatus";
import { ResetButton } from "./components/ResetButton";
import StateChecker from "./components/StateChecker";

//todo add enum
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
    if (StateChecker.findWinner(gameState)) {
      setGameStatus("win");
    } else if (StateChecker.checkForTie(gameState)) {
      setGameStatus("tie");
    } else {
      swapPlayer();
    }
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
