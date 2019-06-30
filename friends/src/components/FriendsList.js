import React, { Component } from 'react';
import Friend from "./Friend";


class FriendList extends Component{
    render() {
        const { friendsInfo } = this.props;
        return (
            <div>
                <h2>Friendster</h2>
                {friendsInfo.map(friend => (
                    <Friend {...this.props} key={friend.id} friend={friend}/>
                ))}/>
            </div> 
        )
    };
}

export default FriendList;