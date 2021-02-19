import React from "react";
import {NavLink} from "react-router-dom";
import s from './../../p1-main/m1-ui/u1-app/App.module.css'
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import PreJunior from "./pages/PreJunior";
import HeadBar from "./HeadBar";

function Header() {
    return (
        <div className={s.header}>
            —ฅ/ᐠ.̫ .ᐟ\ฅ—
            <div className={s.nav}>
                <NavLink to="/pre-junior" activeClassName={s.activeLink}> <HeadBar name={"PreJunior"}/> </NavLink>
                <NavLink to="/pre-junior-1" activeClassName={s.activeLink}> <HeadBar name={"HW1"}/> </NavLink>
                <NavLink to="/pre-junior-2" activeClassName={s.activeLink}> <HeadBar name={"HW2"}/> </NavLink>
                <NavLink to="/pre-junior-3" activeClassName={s.activeLink}> <HeadBar name={"HW3"}/> </NavLink>
                <NavLink to="/pre-junior-4" activeClassName={s.activeLink}> <HeadBar name={"HW4"}/> </NavLink>
                <NavLink to="/jun" activeClassName={s.activeLink}> <HeadBar name={"JUN"}/> </NavLink>
                <NavLink to="/jun+" activeClassName={s.activeLink}> <HeadBar name={"JUN+"}/> </NavLink>
            </div>

        </div>

    );
}

export default Header;
