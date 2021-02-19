import React from "react";
import s from "./../../../p1-main/m1-ui/u1-app/App.module.css"

function Error404() {
    return (
        <div className={s.error404}>
            <div className={s.errorItems}>404</div>
            <div className={s.errorItems}>Page not found!</div>
            <div className={s.errorItems}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
