import React,{ Component } from 'react';

class UserCard extends Component{
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <p>Name: {this.props.name}</p>
            </div>

        );
    }
}

export default UserCard;