import React from 'react';

const Friends = (props) => {
    const {name, age, email} = props.friend

    return(
        <div>
            <h1>{name}</h1>
            <p>Age:{age}</p>
            <p>Email:{email}</p>
        </div>
    );

}

export default Friends