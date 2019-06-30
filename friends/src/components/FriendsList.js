import React from 'react';
import Friends from "./Friend";

const FriendList = (props) => {
    return (
        <div>
            {props.friends.map( x => <Friends key={x.id} friend={x}/> )}
        </div>
    );
}

export default FriendList;