import React from 'react'
import Social from './Social';
import styled from 'styled-components';
import img from '../img/WIN_20201113_08_43_03_Pro.jpg';


const AboutStyle = styled.div`
text-align:center;
`;

const AboutAvatar = styled.div`
padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
border-radius: 100%;
width: 160px;
height: 160px;
border: 1px solid #E91E63;
margin:auto;
display: block;
box-shadow: 0 0 10px rgba(0,0,0,.6);
`;

const AboutH2 = styled.h2`
font-family: 'Roboto' sans-serif;
font-weight: 400;
letter-spacing: 1.2px;
margin: .5em 0 0 0;
color: #C2185B;
`;

const AboutProfecion = styled.p`
margin: .2em 0 1em 0;
letter-spacing: 1.6px;
font-weight: 300;
color: #C2185B;
`;

const AboutLocation = styled.p`
margin: .2em 0 1em 0;
letter-spacing: 1.6px;
font-weight: 400;
`;

const About = ({datos}) => (
 
    <AboutStyle>
      <div className="About-container">
        <AboutAvatar>
          <figure>
            <AboutImg src={img} alt=""/>
          </figure>
        </AboutAvatar>
        <div className="About-name">
          <AboutH2>Arnoldo Jose</AboutH2>
        </div>
        <div className="About-profesion">
         <AboutProfecion>{datos.profession}</AboutProfecion>
        </div>
        <div className="About-desc">
         
        </div>
        <div className="About-location">
        <AboutLocation>Somoto-Madriz</AboutLocation>
        </div>
        <div className="About-social">
         <Social social={datos.social}/>
        </div>
      </div>
    </AboutStyle>
  )


export default About
