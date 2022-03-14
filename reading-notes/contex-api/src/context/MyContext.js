import React, { useContext } from 'react';
import MyContext from './context/MyContext';

const context = useContext(MyContext);

const MyContext = () => {
    return(
        <div>
            <h2> hello {context} Context provider</h2>
        </div>
    );
}

export default MyContext;