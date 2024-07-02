import React from "react";
import ReactDOM from "react-dom/client";
import { useLocation, useNavigate } from 'react-router-dom';

function ErrorPage(){
  
  const location = useLocation();
  const { errorMessage, errorCode } = location.state || {};
  const navigate = useNavigate();
  
  const handleClick = () =>{
    navigate('/')
  };
  
  return (
  <div>
     <div className="text-center">
      <h1 className="h2 mb-2 text-danger">Error Page</h1>
      <p className="mb-5">{errorMessage || 'An error occurred.'}</p>
      <button className = "btn btn-secondary" onClick={handleClick}>
       Go To Home
      </button>
    </div>
  </div>
  )
  
}

export default ErrorPage