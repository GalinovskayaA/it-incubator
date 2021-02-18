import React from "react";
import classes from './Message.module.css';
import vector from './Vector.svg'


type MessageType = {
  avatar: string,
  name: string,
  message: string,
  time: string
}

function Message(props: MessageType) {

  return (
    <div className={classes.content}>
      <div className={classes.avatar}>
        <img src={props.avatar}/>
      </div>
      <div className={classes.message}>
        <div className={classes.element}>
          {props.name}
        </div>
        <div className={classes.element}>
          {props.message}
        </div>
        <div className={`${classes.element} ${classes.time}`}>
          {props.time}
        </div>
        <img src={vector} className={classes.vector}/>
      </div>
    </div>
  );
}

export default Message;
