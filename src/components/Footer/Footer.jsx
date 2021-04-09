import React from 'react';
import s from'./Footer.module.scss';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.pay}>
                <img src="https://thumb.tildacdn.com/tild3262-3939-4033-b361-626366393737/-/resize/220x/-/format/webp/checkout_2.png" alt=""/>
                <a target='_blank' href="https://www.instagram.com/veronika18.10.99/"><img  className={s.insta} src="https://www.flaticon.com/svg/vstatic/svg/2111/2111463.svg?token=exp=1617961914~hmac=5d6e75cbcf312948d183dcc941672bf8" alt="##"/></a>
                <div>© 2018-2021 Твій Бокс. Всі права захищені</div>
            </div>
            <div className={s.main}>
                <div className={s.title}>ОСНОВНЕ</div>
                <ul>
                    <li><a href="#">Головна</a></li>
                    <li><a href="#">Магазин</a></li>
                    <li><a href="#">Онлайн-конструктор</a></li>
                    <li><a href="#">Про нас</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className={s.category}>
                <div className={s.title}>КАТЕГОРІЇ</div>
                    <ul>
                        <li><a href="#">Для неї</a></li>
                        <li><a href="#">Для нього</a></li>
                        <li><a href="#">Карантин 2020</a></li>
                        <li><a href="#">Тематичні</a></li>
                        <li><a href="#">Супергеройські</a></li>
                        <li><a href="#">Для мами</a></li>
                    </ul>
            </div>
            <div className={s.useful}>
                <div className={s.title}>КОРИСНЕ</div>
                <ul>
                    <li><a href="#">Доставка та Оплата</a></li>
                    <li><a href="#">Повернення</a></li>
                    <li><a href="#">Контакти</a></li>
                    <li><a href="#">Відгуки</a></li>
                    <li><a href="#">Співпраця</a></li>
                    <li><a href="#">Корпоративним клієнтам</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
