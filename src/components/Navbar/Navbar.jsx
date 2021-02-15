import React from 'react';
import s from './Navbar.module.css'

const Navbar = (props) => {
    return (

        <div className={s.navbar}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/cart">Cart</a></li>
            </ul>
        </div>
    )
}

export default Navbar