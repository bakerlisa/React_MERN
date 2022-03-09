import React, { Component} from 'react';

import SubContents from './SubContents';
import Advertisements from './Advertisements';

import styles from './styles/Main.module.css';

class Main extends Component{
    render(){
        return(
            <div className={ styles.mainWrp }>
                <SubContents/>
                <Advertisements/>
            </div>
        );
    }
}
export default Main;