import React from "react";
import {AffairType} from "./HW2";
import style from "./HW2.module.css";

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType // need to fix any
  deleteAffairCallback: (affairID: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  };// need to fix

  return (
    <div>
      - {props.affair.name}  <span className={style.priority}>({props.affair.priority})</span>
      <button className={style.deleteButton} onClick={deleteCallback}>X</button>
    </div>
  );
}

export default Affair;
