import React from 'react';
import H2Styled from '../Style/H2Styled';
import styled from 'styled-components';

  const StyledH5 = styled.h5`
  color: white;
  font-family: 'Barlow', sans-serif;
 
  `;

  const StyledContainer = styled.div`
    @media (max-width: 800px) {
      text-align: center;
    }
  `;
const Experience = () => (


  <StyledContainer>
    <H2Styled name="Experiencia"/>
    <StyledH5>Null</StyledH5>
  </StyledContainer>
)


export default Experience
