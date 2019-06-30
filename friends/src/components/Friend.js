import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-materialize';
import axios from 'axios';


class Friend extends React.Component {
    render () {
        const { name, age, email, id } = this.props.friend;

        return(
            <Card>
                <h2>This is From Friend</h2>
            </Card>

        )
    }

}


export default Friend;