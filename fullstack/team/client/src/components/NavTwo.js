import React from 'react';
import { Link } from 'react-router-dom';

const NavTwo = (props) => {
    return(
        <nav className="navTwo">
            <Link to="/status/game/1">Game1</Link>
            <Link to="/status/game/2">Game2</Link>
            <Link to="/status/game/3">Game3</Link>
        </nav>
    )
}

export default NavTwo;