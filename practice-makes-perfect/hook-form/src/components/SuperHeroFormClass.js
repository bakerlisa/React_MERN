import React,{ Component } from 'react';
import styled from './css/MusicFormStyles.module.css';

class SuperHeroFormClass extends Component {
    constructor(props){
        super(props);

        this.state = ({
            name: "",
            power: "",
            weakness: [],
            job: "",
            submitted: false
        })
    }
    
    render(){
        
        const onChangeHandler = (event) => {
            this.setState({
                ...this.state,
                [event.target.name]: event.target.value
            })
        };
        // useState make sure you spread out the object
        const onSelectHandler = (event) => {
            if(this.state.weakness.includes(event.target.value)){
                const copyState = this.state;
                // {...this.state}
                copyState.weakness.splice(copyState.weakness.indexOf(event.target.value),1)
                this.setState(copyState)
            }else{
                const copyState = this.state;
                copyState.weakness.push(event.target.value)
                this.setState(copyState) 
            }
        }

        return(
            <div className={styled.formWrap}>
                <h1>{this.props.title}</h1>
                <h3>Are you a superhero looking for work?</h3>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={onChangeHandler} />
                </div>

                <div>
                    <label htmlFor="power">Power:</label>
                    <input type="text" name="power" onChange={onChangeHandler} />
                </div>

                <div>
                    <label htmlFor="weakness" className={styled.title}>Weakness:</label>
                    <span><input type="checkbox" name="weakness" value="rocks" onChange={onSelectHandler}/><label htmlFor="rocks">Rocks:</label></span>
                    
                    <span><input type="checkbox" name="weakness" value="silver" onChange={onSelectHandler}/><label htmlFor="silver">Silver:</label></span>

                    <span><input type="checkbox" name="weakness" value="water" onChange={onSelectHandler}/><label htmlFor="water">Water:</label></span>

                    <span><input type="checkbox" name="weakness" value="fire" onChange={onSelectHandler}/><label htmlFor="fire">Fire:</label></span>

                    <span><input type="checkbox" name="weakness" value="sunlight" onChange={onSelectHandler}/><label htmlFor="sunlight">Sunlight:</label></span>

                    <span><input type="checkbox" name="weakness" value="pitch" onChange={onSelectHandler} /><label htmlFor="pitches">High Pitch Noises:</label></span>
                </div>

                <div>
                    <label htmlFor="job">Job:</label>
                    <select name="job" onChange={onChangeHandler}>
                        <option>Maintance Worker</option>
                        <option>Policeman</option>
                        <option>Firefighter</option>
                        <option>Baker of Delicious Donuts</option>
                        <option>Pop Star</option>
                    </select>
                </div>

                <input type="Submit" value="Submit" />
            </div>
        );
    }
}

export default SuperHeroFormClass;