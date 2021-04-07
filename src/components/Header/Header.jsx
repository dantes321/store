import React, {useState} from 'react';
import s from './Header.module.scss'

const Header = () => {

    const [active,isActive] = useState(false)

    let toggleClass = () =>{
        isActive(!active)
    }

    return (

        <div className={s.headerInner}>
            <div className={s.logo}></div>
            <nav>
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
            <a className={s.createBox} href="#">Створи свій бокс</a>
        </div>
    );
};

export default Header;
