import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-materialize';

//Components
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import UpdateFriend from './components/UpdateFriend';

//Design Elements
import './App.css';

class App extends React.Component {
  constructor() {
      super();

      this.state= {
          friendsInfo: []
      };
  }

//   CDU() {
//     axios
//     .get
//     .them
//     .catch
// }

render() {
    return (
    <div className="App">
      <header className="App-header"></header>
      <Container>
          <FriendsList/>
      </Container>
    </div>
  );
}
}

export default App;
