import React from 'react'
import H2Styled from '../Style/H2Styled';
import H3Styled from '../Style/H3Styled';
import PStyled from '../Style/PStyled';

const Education = ({datos} ) => (
  
    <div className="Education">
      <H2Styled name="Educacion"/>
      <div className="Education-container">
        <div className="Education-item">
          <H3Styled>
          <p>UNAM</p>
          </H3Styled>

          <p>aprendi muchas cosas</p>
          <PStyled name={datos.address}/>
        <PStyled>{}</PStyled>
        
        </div>
      </div>
    </div>
  )


export default Education
