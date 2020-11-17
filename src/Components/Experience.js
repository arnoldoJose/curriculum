import React from 'react'

const Experience = ({data}) => (

  <div>

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
