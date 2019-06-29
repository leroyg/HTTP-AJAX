import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-materialize';

//Components
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import UpdateFriend from './components/UpdateFriend';

//Design Elements
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
