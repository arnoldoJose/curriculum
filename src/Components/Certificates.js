import React from 'react'

const Certificates = ({data}) => (
    <div className="">
      {data.map((item,index) => (
        <div className="Certificates" key={`data-${index}`}>
          <div className="Certificates-container">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )


export default Certificates
