import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";

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
    <div>
      homeworks 3
      <GreetingContainer users={users} addUserCallback={addUserCallback}/>
    </div>
  );

}

export default HW3;
