import React, { Component } from 'react';

class MonsterCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            "score": this.props.score
        }
    }
    render(){
        const {name,img,rank,score,edu,talent} = this.props;

        return(
            <div className="monster-card">
                <div className="img-wrp"><img src={img}/></div>
                <h2>{name}</h2>
                <h4>Rank: #{rank}</h4>
                <p className="scare"><strong>Scare Score: </strong> <span className="score">{this.state.score}</span></p>
                <p><strong>Education:</strong> {edu}</p>
                <p className="talent"><strong>Talents: </strong>{talent}</p>
                <button onClick={ () => { this.setState({ score: this.state.score + 1}) } }>Scare Button For {name}</button>
            </div>
        );
    }
}

export default MonsterCard;