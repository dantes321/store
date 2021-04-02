import React, {useState} from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const [isActive,setActive] = useState(true);

    const toggleClass =() => {
        setActive(!isActive);
    }

    return <div>
        <div onClick={toggleClass} className={ isActive ? `${s.navbar} ${s.active}` : s.navbar }>
            <ul>
                <li><NavLink to='/auth'>Auth page</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/friends'>Friends</NavLink></li>
                <li><NavLink to='/settings'>Settings</NavLink></li>
            </ul>
        </div>
        <div onClick={toggleClass}  className={isActive? `${s.toggle} ${s.active}` : s.toggle}>

        </div>
    </div>

};

export default Navbar;
