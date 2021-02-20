import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{

    return(
        <div className={s.header}>
            <div className={s.headerInner}>
                <div className={s.logo}></div>
                <div  className={s.headerBurger}>
                    <span></span>
                </div>
                <div className={s.navbar}>
                    <ul>
                        <li><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></li>
                        <li><NavLink activeClassName={s.active}  to="friends">Friends</NavLink></li>
                        <li><NavLink activeClassName={s.active}  to="/messages">Messages</NavLink></li>
                        <li><NavLink activeClassName={s.active}  to="/music">Music</NavLink></li>
                        <li><NavLink activeClassName={s.active}  to="/settings">Settings</NavLink></li>
                    </ul>
                </div>
                <div className={s.siteDesc}>Site for Biba's and Boba's</div>
            </div>
        </div>
    )
}

export default Header