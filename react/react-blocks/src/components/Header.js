import React, { Component } from 'react';
import styles from  './styles/Header.module.css';

class Header extends Component{
    render(){
        return(
            <div className={ styles.headerWrp }><span>HEADER</span></div>
        );
    }
}

export default Header;
