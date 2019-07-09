import React, { Component } from 'react';

class AddFriendForm extends Component {
    state = {
        friends: [
            {
                id:'',
                name: '',
                age: 0,
                email: ''
            }
        ]
    };

    handleChange = event => {
        
    }

    render(){
        return(
            <div>
                <form>
                    <input type='text' name='name' placeholder='Name' value='' />

                    <input type='nuber' name='age' placeholder='Age' value='' />

                    <input type='text' name='email' placeholder='Email' value='' />

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

}

export default AddFriendForm