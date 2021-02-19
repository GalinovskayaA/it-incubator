import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {

    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    console.log(users);

    const addUserCallback = (userName: string) => {// need to fix any
        const user: UserType = {
            _id: v1(),
            name: userName,
        }
        const newUser = [user, ...users]
        setUsers(newUser); // need to fix
    }

    return (
        <div className={s.content}>
            <div className={s.HW}>
                <h4>homeworks 3</h4>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>

        </div>
    );

}

export default HW3;
