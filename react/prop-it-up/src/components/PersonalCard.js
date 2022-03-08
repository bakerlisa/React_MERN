import React, { Component } from 'react';
import App from '../App';

class PersonalCard extends Component{
    render(){
        return(
            <div className="info-wrapper">
                <div className="img-wrapper"><img src={this.props.image} alt="image of author " /></div>
                <h2><span>Full Name: </span>{this.props.firstName} {this.props.lastName}</h2>
                <p><strong>Age</strong>: { this.props.age }</p>
                <p><strong>Hair Color</strong>: { this.props.hairColor }</p>
            </div>
        )
    }
}

export default PersonalCard;