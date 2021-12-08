import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Board } from './components/Board';


function App() {

  const currentState:string[] = ["x","o","","","","","","",""];

  
  return (
    <>
      <Board gameState={currentState} />
    </>
  )
}

export default App;
