import React from 'react'
import styled from 'styled-components';
import H2Styled from '../Style/H2Styled';
const StyleSkill = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  grid-row-gap: 0.5em;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const SkilllH5 = styled.h5`
  margin: 0.5em 0;
  color:white;
  font-family: "Barlow", sans-serif;
`;

const SkillLine = styled.div`
  height: 8px;
  position: relative;
  border-radius: 50px;
  background: #849ff8;
`;



const SkillSpan = styled.span`
display: block;
height: 100%;
width: ${props => props.width};
border-radius:8px;
background-color: #321ee9;
overflow:hidden;
position:relative;
box-shadow: inset 0 2px 9px rgba(255,255,255,0.3) inset 0 -2px 6px rgba(0,0,0,0.4);
&:after {
content: "";
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
background: blue;}`;

const ContainerSkill = styled.div`
@media (max-width: 800px) {
  text-align: center;
}
`;

const StyledSpace = styled.div`
@media (max-width: 800px){
  margin-top: 2em;
}
`;
const Skills = ({ data }) => (
  <ContainerSkill className="Skills">
    <H2Styled name="Skills" />
    <StyleSkill>
      {data.map((skill, index) => (
        <StyledSpace className="Skills-item" key={`data-${index}`}>
          <SkilllH5>{skill.name}</SkilllH5>
          <SkillLine>
            <SkillSpan width={skill.percentage} />
            <p>{skill.percentage}</p>
          </SkillLine>
        </StyledSpace>
      ))}
    </StyleSkill>
  </ContainerSkill>
);


export default Skills

/**
 * 
 */