import React from 'react';
import H2Styled from '../Style/H2Styled';
import styled from 'styled-components';

const StyledContent = styled.div`
@media (max-width: 800px){
  text-align:center;
}
`;
const Portafolio = () => {

  return (
    <StyledContent>
      <H2Styled name="Portafolio"/>
    </StyledContent>
  )
}

export default Portafolio
