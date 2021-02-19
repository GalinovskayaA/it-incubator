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
        <div className={style.affairItem}>
            <div className={style.item}>
                - {props.affair.name} <span className={style.priority}>({props.affair.priority})</span>
            </div>
            <div>
                <button className={style.deleteButton} onClick={deleteCallback}>X</button>
            </div>
        </div>
    );
}

export default Affair;
