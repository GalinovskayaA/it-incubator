import React from "react";
import {NavLink} from "react-router-dom";
import s from './../../p1-main/m1-ui/u1-app/App.module.css'
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import PreJunior from "./pages/PreJunior";
import HeadBar from "./HeadBar";
import {PATH} from "./Routes";

function Header() {
    return (
        <div className={s.header}>
            ฅ/ᐠ.̫ .ᐟ\ฅ
            <div className={s.nav}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}> <HeadBar name={"PreJunior"}/> </NavLink>
                <NavLink to={PATH.PRE_JUNIOR_1} activeClassName={s.activeLink}> <HeadBar name={"HW1"}/> </NavLink>
                <NavLink to={PATH.PRE_JUNIOR_2} activeClassName={s.activeLink}> <HeadBar name={"HW2"}/> </NavLink>
                <NavLink to={PATH.PRE_JUNIOR_3} activeClassName={s.activeLink}> <HeadBar name={"HW3"}/> </NavLink>
                <NavLink to={PATH.PRE_JUNIOR_4} activeClassName={s.activeLink}> <HeadBar name={"HW4"}/> </NavLink>
                <NavLink to={PATH.JUN} activeClassName={s.activeLink}> <HeadBar name={"JUN"}/> </NavLink>
                <NavLink to={PATH.JUN_PLUS} activeClassName={s.activeLink}> <HeadBar name={"JUN+"}/> </NavLink>
            </div>

        </div>

    );
}

export default Header;
