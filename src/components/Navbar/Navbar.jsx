import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (

        <div className={s.navbar}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/cart">Cart ({props.store.CartItems.length})</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar