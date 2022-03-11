import React,{ Component } from 'react';

class UserCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            talents: this.props.talents,
            hobby: ''
        }
    }    

    render(){
        const addTalent = (e) => {
            console.log()
            // var moreHob = `${e.target.value}, ${this.state.talents}`;
            // this.setState({ hobby:  e.target.value });
        }
        const submitTalent = (e) => {
            e.preventDefault();
            console.log(e.target.value);
        }
        return(
            <div>
                <h1>I love {this.state.talents} /h1>
                <form onSubmit={ submitTalent }>
                    <input type="text" className="text" onChange={ addTalent } />
                    <input type="submit" value="Add Hobby" />
                </form>
            </div>
        );
    }
}

export default UserCard;