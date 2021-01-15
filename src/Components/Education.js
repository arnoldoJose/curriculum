import React from 'react';
import H2Styled from '../Style/H2Styled';
import H3Styled from '../Style/H3Styled';
import PStyled from '../Style/PStyled';
import styled from 'styled-components';

const EducationDiv = styled.div`
  @media (max-width: 800px) {
    text-align: center;
  }
`;
const Education = ({ datos }) => (
  <EducationDiv className="Education">
    <H2Styled name="Educacion" />
    <div className="Education-container">
      <div className="Education-item">
        <H3Styled>
          <p>UNAN León Sede Somoto</p>
        </H3Styled>
        <PStyled name="2014-2019" />
        <PStyled>{}</PStyled>
      </div>
    </div>
  </EducationDiv>
);


export default Education
