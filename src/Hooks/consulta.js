

import  {useState,useEffect} from 'react'
const api = "https://us-central1-gndx-cv.cloudfunctions.net/me";
const consultar = () => {
 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data,setData] = useState([]);


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {


      fetch(api)
      .then((value) => ( value.json()))
        .then((value) => ( setData(value)))
  }, [])
  
  return data

}

export default consultar
