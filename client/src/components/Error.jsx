import React from 'react';
import nfond from "./img/404.png";

const Error = () => {
  return (
    <>
      <div className="notFound">
        <div className="notf">
             <img src={nfond} alt="" />
        </div>
        
        <h3>We are sorry , Page not Found !</h3>
      </div>
    </>
  )
}

export default Error
