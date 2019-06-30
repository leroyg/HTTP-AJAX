import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-materialize';
import axios from 'axios';


class Friend extends React.Component {
    deleteFriend = () => {
        const { id } = this.props.friend;

        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => this.props.updateFriends(response.data))
            .catch(error => {
                console.log(error);
            });
    };

    render () {
        const { name, age, email, id } = this.props.friend;

        return(
            <Card className="friendCard">
                <div className="friend-header">
                    <h2>{name}</h2>
                </div>
                <div>
                    <p>Age: {age}</p>
                    <p>Email: {email}</p>
                </div> 

                <div className="change-friend">
                    <Link to={`/friend/edit/${id}`} className='friend-card-edit-text'>
                    <i className='small material-icons'>edit</i>
                    </Link>
                    <span onClick={this.deleteFriend} className='delete-button'>
                        <i className="small material-icons">Delete</i>
                    </span>
                </div>  
            </Card>
        );
    }

}


export default Friend;