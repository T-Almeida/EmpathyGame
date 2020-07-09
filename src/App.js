import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Components/Game';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Empathy Game</p>

        <Game />
      </header>
    </div>
  );
}

export default App;
