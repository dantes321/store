import React, { useContext, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { StoreContext } from '../../../context/store-context';

import s from './Boxes.module.scss';

const Boxes = () => {
  const { state } = useContext(StoreContext);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const renderBoxes = state.boxes.map((el) => (
    <div data-aos='fade-up' key={el.id} className={s.box}>
      <img src={el.img} alt='' />
      <div className={s.title}>{el.title}</div>
      <div className={s.price}>{el.price} грн</div>
      <a href='/#'>Выбрать</a>
    </div>
  ));

  return <>{renderBoxes}</>;
};

export default Boxes;
