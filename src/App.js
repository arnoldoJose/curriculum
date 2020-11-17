import React from 'react'
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import Info from './Components/Info';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Certificates from './Components/Certificates';
import consultar from './Hooks/consulta';

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

  return datos.length === 0 ? <h1>cargando</h1> : (
    <Main>
    <GlobalStyle/>
      <Sidebar>
        <About datos={datos}/>
      </Sidebar>
      <Info>
        <Education datos={datos}/>

        <Experience data={datos.experience}/>
        
        <Certificates data={datos.certificate}/>
        
        <Skills data={datos.skills}/>
      </Info>
    </Main>
  );
}

export default App;
