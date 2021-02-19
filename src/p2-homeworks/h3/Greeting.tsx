import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./Greeting.module.css";

export type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}


// презентационная компонента (для верстальщика)
function Greeting(props: GreetingPropsType) {

    const inputClass = `${props.error === "" ? s.hello : s.error}`
    // need to fix with (?:)

    return (
        <div className={s.someClass}>
            <input value={props.name} onChange={props.setNameCallback} onKeyPress={props.onKeyPressAddUser}
                   className={inputClass}/>
            <span>{props.error}</span>
            <button onClick={props.addUser}>add</button>
            <span>{props.totalUsers}</span>
        </div>
    );
}

export default Greeting;
