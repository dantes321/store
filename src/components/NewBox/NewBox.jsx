import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

import s from './NewBox.module.scss';

const NewBox = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className={s.newBox}>
      <div className={s.boxContainer}>
        <div data-aos='fade-right' className={s.title}>
          Нужен четкий Сюрприз-Бокс?
        </div>
        <div data-aos='fade-left' className={s.subtitle}>
          Наш сервис случайных подарков поможет Вам!
        </div>
        <Link to='store' duration={700} smooth>
          Выбрать бокс
        </Link>
      </div>
    </div>
  );
};

export default NewBox;
