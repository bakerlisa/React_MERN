import React, { Component } from 'react';

class UserMe extends Component{
    constructor(props){
        super(props);
        this.state=({
            property: this.props.num,
            bkc: "red"
        })
    }
    
    render(){
        const snowing = () => {
            this.setState({
                property: this.state.property + 1
            })
        }
        const notSnowing = () => {
            this.state.property >= 1 ? this.setState({ property: this.state.property - 1 }) : this.setState({ property: 0 }) ;
        }
        const styleChange = () => {
            
        }
        return(
            <div style=({background: this.state.bkc }) onMouseOver={ styleChange }>
                <h1 onClick={snowing}>Frozen How Many Times {this.state.property}</h1>
                <button onClick={ notSnowing }>Decrease</button>
            </div>
        );
    }
}

export default UserMe;