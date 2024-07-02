import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom';


function SuccessPage(){
  
  const navigate = useNavigate();
  
  const handleClick = () =>{
    navigate('/')
  };
  
  
  return (
  <div className="text-center">
    <h1 className="text-success">
      Success! 
    </h1> 
    <button className = "btn btn-secondary" onClick={handleClick}>
       Go To Home
    </button>
  </div>
  )
  
}

export default SuccessPage