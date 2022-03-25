import React from 'react';
import { Link } from 'react-router-dom';

const NavThree = (props) =>{
    
    return(
        <nav className="navTwo">
            <Link to="/players/list">List</Link>
            <Link to="/players/addplayer">Add Player</Link>
        </nav>
    )
}

export default NavThree;