import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) =>{
    return(
        <div className={s.navbar}>
            <ul>
                <li><NavLink activeClassName ={s.active} to="/profile">Profile</NavLink></li>
                <li><NavLink activeClassName ={s.active} to="/dialogs">Dialogs</NavLink></li>
                <li><NavLink activeClassName ={s.active} to="/friends">Friends</NavLink></li>
                <li><NavLink activeClassName ={s.active} to="/settings">Settings</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;