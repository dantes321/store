import React from 'react';
import { Link } from 'react-scroll';
import s from './Navbar.module.scss';

const Navbar = () => (
  <div className={s.navbar}>
    <ul>
      <li>
        <Link smooth duration={700} to='home'>
          Главная
        </Link>
      </li>
      <li>
        <a href='/#'>Видео</a>
      </li>
      <li>
        <a href='/#'>Отзывы</a>
      </li>
      <li>
        <a href='/#'>Контакты</a>
      </li>
      <li>
        <a href='/#'>Доставка</a>
      </li>
    </ul>
  </div>
);

export default Navbar;
