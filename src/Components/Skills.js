import React from 'react'
import styled,{keyframes} from 'styled-components';
import H2Styled from '../Style/H2Styled';
const StyleSkill = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 2rem;
grid-row-gap: 0.5em;
`;

const SkilllH5 = styled.h5`
  margin: 0.5em 0;
  font-family: "Barlow", sans-serif;
`;

const SkillLine = styled.div`
height:8px;
position:relative;
border-radius: 50px;
background: #849ff8;
`;


const move = keyframes`
0%{
background-position: 0 0;
}
100%{
background-position: 50px 50px;
}
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
background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);
   z-index: 1;
    background-size: 50px 50px;
    animation: ${move} 4s linear infinite;
    overflow: hidden;} `;



const Skills = ({data}) => (
    <div className="Skills">
     
      <H2Styled name="Skills"/>
      <StyleSkill>
       {data.map((skill,index) => (
         <div className="Skills-item" key={`data-${index}`}>
           <SkilllH5>{skill.name}</SkilllH5>
           <SkillLine>
             <SkillSpan width={skill.percentage}/>
           </SkillLine>
         </div>
       ))}
      </StyleSkill>
    </div>
  )


export default Skills
