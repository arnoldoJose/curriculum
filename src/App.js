import React from 'react'
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import Info from './Components/Info';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Portafolio from './Components/Portafolio';
import consultar from './Hooks/consulta';
import Spinner from './Components/Spinner';

import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    
    body{
      font-family: 'Lato', sans-serif;
      margin: 0;
      padding: 0;
      background: #f5f5f5
    }
`;

function App() {
  let datos = consultar();

  return datos.length === 0 ? <Spinner/>: (
    <Main>
    <GlobalStyle/>
      <Sidebar>
        <About datos={datos}/>
      </Sidebar>
      <Info>
        <Education datos={datos}/>

        <Experience/>
        <Portafolio/>
        <Skills data={datos.skills}/>
      </Info>
    </Main>
  );
}

export default App;
