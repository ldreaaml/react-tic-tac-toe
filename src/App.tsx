import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Board } from "./components/Board";
import { ResetButton } from "./components/ResetButton";

function App() {
  const currentState: string[] = ["x", "o", "", "", "", "", "", "", ""];

  return (
    <>
      <Board gameState={currentState} />
      <ResetButton />
    </>
  );
}

export default App;
