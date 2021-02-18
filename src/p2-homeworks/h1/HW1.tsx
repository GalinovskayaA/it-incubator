import React from "react";
import Message from "./Message";
import {BrowserRouter, Route} from 'react-router-dom';

const HW1 = () => {
  const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Sona",
    message: "NPM start ввел?",
    time: "22:00",
  };

  return (
    <BrowserRouter>
      <Message avatar={messageData.avatar} name={messageData.name} message={messageData.message}
               time={messageData.time}/>
    </BrowserRouter>
  );
}

export default HW1;
