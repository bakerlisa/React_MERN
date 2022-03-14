import React from 'react';
import styledComponents from 'styled-components';
import styled from './css/WrapperStyles.module.css';

const Wrapper = props => {
    return(
        <div clasaName={ styled.wrapper }>
            {props.children}    
        </div>
    );
}

export default Wrapper;