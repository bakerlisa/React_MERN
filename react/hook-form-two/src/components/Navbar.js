import React from 'react';
import styled from './css/NavbarStyles.module.css';

const Navbar = props => {
    return(
        <div className={ styled.nav }>
            <h2>Hi !!name!!</h2>
        </div>
    );
}

export default Navbar;