import React,{useEffect} from 'react';
import H2Styled from '../Style/H2Styled';
import Axios from 'axios';
const Portafolio = () => {

  useEffect(() => {
  let consultarAPI = async () => {
    let data = await Axios.get(
      `${process.env.REACT_APP_BACKEND_DELIVERY}/product/all?categoria=food`
    );
    console.log(data);
  };
  consultarAPI();
  }, [])

  return (
    <div>
      <H2Styled name="Portafolio"/>
    </div>
  )
}

export default Portafolio
