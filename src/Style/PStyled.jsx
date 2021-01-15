import React from 'react'
import styled from 'styled-components';

const StyledP = styled.p`
color: white;
font-weight: 300;
margin: .5em 0 1.2em 0;
`;

const PStyled = ({name}) => <StyledP>{name}</StyledP>

export default PStyled
