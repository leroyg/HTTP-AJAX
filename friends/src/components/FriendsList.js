import React, { Component } from 'react';
import Friend from "./Friend";


class FriendList extends Component{
    render() {
        const { friends } = this.props;
        return (
            <div>
                <h2>Friendster</h2>
                {friends.map(friend => (
                    <Friend {...this.props}
                    key={friend.id}
                    friend={friend}
                    updateFriends={this.props.updateFriends}
                    />
                ))}
            </div>    
        );
    }
}

export default FriendList;