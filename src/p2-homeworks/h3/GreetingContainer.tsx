import React, {KeyboardEvent, ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: (userName: string) => void // need to fix any
}
export type ErrorType = "" | "error"


// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<ErrorType>(""); // need to fix any
  const totalUsers = users.length;


  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const onKeyPressAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addUser()
  }
  const valueError = (newErrorValue: ErrorType) => {
    setError(newErrorValue)
  }

  const addUser = () => {
    if (name === "") {
      setError("error")
    } else {
      addUserCallback(name)
      setError("")
      alert(`Hello,  ` + name + `!`);
    }
    setName("")
  };


  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      onKeyPressAddUser={onKeyPressAddUser}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  );
}

export default GreetingContainer;
