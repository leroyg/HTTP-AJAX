import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-materialize';
import axios from 'axios';


class Friend extends React.Component {
    
    render () {
        const { name, age, email, id } = this.props.friend;
        const { id } = this.props.friend;

        return(
            <Card className="friendCard">
                <div className="friendHeaderDiv">
                    <h2>{name}</h2>
                </div>
                <div>
                    <p>Age: {age}</p>
                    <p>Email: {email}</p>
                </div>   
            </Card>

        );
    }

}


export default Friend;