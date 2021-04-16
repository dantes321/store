import React from 'react';
import s from './Header.module.scss';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.headerLeft}>
                    <div className={s.headerLogo}>
                        <img src="https://static.tildacdn.com/tild3134-3063-4434-a164-643637656562/logo_2.png" alt=""/>
                    </div>
                    <div className={s.headerTitle}>СЮРПРИЗ-БОКСЫ №1 В УКРАИНЕ</div>
                </div>
                <div className={s.headerRight}>
                    <div className={s.numbers}>
                        <div>095-712-331-5</div>
                        <div>096-712-331-5</div>
                    </div>
                    <div className={s.delivery}>
                        <div>Доставка 1-3 дня.</div>
                        <div>Нова-Пошта</div>
                    </div>
                    <a href="#">Сотрудничество</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
