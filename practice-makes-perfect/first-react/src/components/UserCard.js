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
            // this.setState({ hobby: this.state.talents + ', ' + e.target.value });
            this.setState({ hobby: e.target.value });
        }
        const submitTalent = (e) => {
            e.preventDefault();
            this.setState({talents: this.state.talents + ', ' + this.state.hobby})
            this.setState({hobby: ' '})
            
        }
        return(
            <div>
                <h1>I love {this.state.talents} </h1>
                <form onSubmit={ submitTalent }>
                    <input type="text" className="text" onChange={ addTalent } value={this.state.hobby}/>
                    <input type="submit" value="Add Hobby" />
                </form>
            </div>
        );
    }
}

export default UserCard;