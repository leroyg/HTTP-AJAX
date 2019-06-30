import React, { Component } from 'react';
import axios from 'axios';


//Components
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';

//Design Elements
import './App.css';

class App extends Component {
  state = { friends: [] };
  

  componentDidMount() {
    axios
        .get("http://localhost:5000/friends")
        .then(response => this.setState({ friends: response.data }))
        .catch(error => console.log(error));
    };

    deleteMessages =id => {
        axios   
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error)); 
    };


    render() {
        return (
        <div className="App">
        <header className="App-header"></header>
        <h1>How many friends do you have? {this.state.friends.length} </h1>
        <FriendsList friends={this.state.friends} />
        </div>
    );
    }

}

export default App;