import React, {useState} from 'react';
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    const [active,isActive] = useState(false)

    let toggleClass = () =>{
        isActive(!active)
    }

    return (

        <div className={active? `${s.headerInner} ${s.active}`: s.headerInner}>
           <NavLink className = {s.logo} to="/home">

           </NavLink>
            <nav className={active?`${s.nav} ${s.active}`:s.nav}>
                <ul>
                    <li><a href="#">Всі бокси</a></li>
                    <li><a className={s.virus} href="#">Карантин</a></li>
                    <li><a href="#">Доставка і оплата</a></li>
                    <li><a href="#">Контакти</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Корпоративним клієнтам</a></li>
                </ul>
            </nav>
            <div onClick={toggleClass} className={active? `${s.toggle} ${s.active}`: s.toggle}></div>
            <NavLink className={s.createBox} to ='/createbox'>Створи свій бокс</NavLink>
        </div>
    );
};

export default Header;
