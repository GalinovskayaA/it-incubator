import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import s from "./../../p1-main/m1-ui/u1-app/App.module.css"
import {BrowserRouter, HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div className={s.HW5}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
