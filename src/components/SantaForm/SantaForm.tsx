import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from 'axios';  
import { useNavigate } from "react-router-dom";
import SendMail from '../../client/SendMail';


function SantaForm(){

  const URL_USERPROFILES = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json';
  const URL_USERS = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json';
  const tenYears = 315569260000;
  
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [userArray, setUserArray] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  
  
  // Check the user database on btn click
  const handleClickBtn = () => {
    const userInfo = axios.get(URL_USERS);
    userInfo.then((resp)=>{
      let dummyArray = [];
      let dummyIDArray = [];
      resp.data.forEach((items)=>{
        dummyArray.push(items.username);
        dummyIDArray.push(items.uid);
      })
      
      const findIndex = dummyArray.indexOf(name);
      if (findIndex == -1){
        navigate('/error', { state: { errorMessage: 'Child Not Found' }});
      }
      else{
        fetchUserProfile(dummyIDArray[findIndex])
      }
    })
    
  }
  
  
  // Fetching the userprofile for the URL
  const fetchUserProfile = (id) =>{
    let dummyDateArray = [];
    let dummyAddressArray = [];
    let dummyIDArray = [];
    const userProfileInfo = axios.get(URL_USERPROFILES);
    userProfileInfo.then((resp)=>{
      resp.data.forEach((items)=>{
        dummyAddressArray.push(items.address);
        dummyDateArray.push(items.birthdate);
        dummyIDArray.push(items.userUid);
      })
      const findIndex = dummyIDArray.indexOf(id);
      const currDate = Date.now();
      const childbirth = new Date(dummyDateArray[findIndex]);
      
      if ((currDate - childbirth) < tenYears){
          navigate('/success');
      }
      else{
        navigate('/error', { state: { errorMessage: 'Child is more than 10 years old!'}});
      }
      
    })
  }
  
  
// function to send an email every 15 seconds. 
  useEffect(() => {
    const intervalFunction = () => {
      let message = 'Dear Santa, user ' + name + ' has these wishes:' + '\n' + wish ;
      SendMail(message);
      setCount((prevCount) => prevCount + 1);
    };
    const intervalId = setInterval(intervalFunction, 15000);
    return () => clearInterval(intervalId);
  }, [name,wish]);
  
  
  
  return (
    <div style={{"margin-left":"20px", "max-width":"1000px"}}>
      <h1>A letter to Santa</h1>
      <p className="bold">Ho ho ho, what you want for Christmas?</p>

      <p> Who are you? </p>
      
      <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder='charlie.brown'
          className = "form-control" 
        />
      
      <form class="mb-3" method="post">
        <p>What do you want for christmas?</p>
        <textarea  className="form-control"
          name="wish"
          rows="10"
          cols="45"
          maxLength="100"
          placeholder="Gifts!"
          id="textarea"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
        ></textarea>
        <br />
        
        <button type="button" classname = "btn btn-primary" onClick={handleClickBtn}>Send</button>
      </form>
    </div>
    )
}

export default SantaForm