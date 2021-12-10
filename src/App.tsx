import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { GameStatus } from "./components/GameStatus";
import { ResetButton } from "./components/ResetButton";
import StateChecker from "./components/StateChecker";
import { Player } from "./components/Customizable";

function App() {
  const [gameState, setGameState] = useState<string[]>(Array(9).fill(""));
  const [currentPlayer, setPlayerState] = useState<string>(Player.one);
  const [gameStatus, setGameStatus] = useState<string>("playing");

  const setValue = (index: number) => {
    if (gameState[index] === "" && gameStatus === "playing") {
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
    setPlayerState(currentPlayer === Player.one ? Player.two : Player.one);
  };

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
