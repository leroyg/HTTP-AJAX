import React from 'react';
import Friend from "./Friend";

const FriendList = (props) => {
    return (
        <div>
            {props.friend.map( x => <Friend key={x.id} friend={x}/> )}
        </div>
    );
}

export default FriendList;