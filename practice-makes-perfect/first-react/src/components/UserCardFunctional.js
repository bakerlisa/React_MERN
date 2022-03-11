import React, { useState } from 'react';

const UserCardFunctional = props => {
    const [love,setLove] = useState({
        count: 0
    })
    const loveUp = () => {
        setLove({count: love.count + 1 })
    }
    return(
        <div>
            <h1 onClick={loveUp}>I love you so much! { love.count }</h1>
        </div>
    );
};

export default UserCardFunctional;