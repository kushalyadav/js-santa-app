import React from "react";
import ReactDOM from "react-dom/client";
import axios from 'axios';  

const SendMail = async(message) => {
    try {
      await axios.post('/send-email', {
        'message': message
      });
    } catch (error) {
      console.log('error', error)
    }
}

export default SendMail