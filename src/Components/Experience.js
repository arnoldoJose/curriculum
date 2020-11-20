import React from 'react';
import H2Styled from '../Style/H2Styled';

const Experience = ({data}) => (

  <div>
    <H2Styled name="Experiencia"/>
    {data.map((item,index) => (
      <div className="Experience" key={`data-${index}`}>
        <div className="Experience-container">
    <p>{item.company}</p>
        </div>
      </div>
    ))}
  </div>
)


export default Experience
