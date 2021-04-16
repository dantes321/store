import React from 'react';
import s from './Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Видео</a></li>
                <li><a href="#">Отзывы</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Доставка</a></li>
            </ul>
        </div>
    );
};

export default Navbar;
