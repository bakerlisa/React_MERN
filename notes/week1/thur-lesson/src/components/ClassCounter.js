import React, { Component } from 'react';
import ClassCounterBox from './css/ClassCounterBox';

class ClassCounter extends Component{
    constructor(props){
        super(props);
        this.state = { 
            position: true,
            coutner: 3
        }
    }
    
    render(){
        const countUp = () => {
            console.log(this.state.coutner)
            this.setState({coutner: this.state.coutner + 1})
        }
        const countDown = () => {
            console.log(this.state.coutner)
            this.setState({coutner: this.state.coutner - 1})
        }

        return(
            <ClassCounterBox>
                <h1>Count { this.state.coutner }</h1>
                <button onClick={ countUp }>Click Me!</button>
                <button onClick={ countDown }>Don't Click Me!</button>
                <p>This is a class Component!</p>
                <h3>I'm a class too!</h3>
            </ClassCounterBox>
        );
    }
}

export default ClassCounter;