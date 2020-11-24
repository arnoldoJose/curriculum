import React from 'react'

const Spinner = () => {
  return (
   <div className="container mx-auto text-center">
      <div className="spinner-border text-info mt-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
   </div>
  );
}

export default Spinner
