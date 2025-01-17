import './App.css';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <Outlet/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
