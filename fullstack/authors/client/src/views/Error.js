import React from 'react';
import confused from '../img/confused.gif'
import Banner from '../components/Banner';

const Error = (props) => {
    return(
        <>
            <Banner page="error" title="404"/>
            <div>
            
                <img src={confused} alt="confused gif" />
                <p>There seems to be some kind of mistake. Would like to add this author?</p>
                <div className="button-lg">Create Author</div>
            </div>
        </>
    )
}

export default Error;