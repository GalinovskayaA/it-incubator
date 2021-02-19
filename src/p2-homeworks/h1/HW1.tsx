import React from "react";
import Message from "./Message";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";


const HW1 = () => {
    const messageData = {
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Sona",
        message: "NPM start ввел?",
        time: "22:00",
    };

    return (
        <div className={s.content}>
            <div className={s.HW1}>
                <Message avatar={messageData.avatar} name={messageData.name} message={messageData.message}
                         time={messageData.time}/>
            </div>
        </div>
    );
}

export default HW1;
