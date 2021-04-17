import React from 'react';
import s from './Navbar.module.scss';
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul>
                <li><Link smooth = {true} duration ={700} to="home">Главная</Link></li>
                <li><a href="#">Видео</a></li>
                <li><a href="#">Отзывы</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Доставка</a></li>
            </ul>
        </div>
    );
};

export default Navbar;
