import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
background: var(--${props => props.color});
border:none;
color:var(--white);
`;

export default StyledButton;