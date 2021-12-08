import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Board } from './components/Board';


function App() {
  
  const currentState:string[] = ["","","","","","","","",""];

  return (
    <>
      <Board gameState={currentState} />
    </>
  )
}

export default App;
