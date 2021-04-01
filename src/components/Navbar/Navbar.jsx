import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul>
                <li><NavLink to='/auth'>Auth page</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/friends'>Friends</NavLink></li>
                <li><NavLink to='/settings'>Settings</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;
