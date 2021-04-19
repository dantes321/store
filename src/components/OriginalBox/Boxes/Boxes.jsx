import React, { useContext } from 'react';
import 'aos/dist/aos.css';
import { OriginalBoxContext } from '../../../context/originalBox-context';

import s from './Boxes.module.scss';

const Boxes = () => {
  const { state, isActive } = useContext(OriginalBoxContext);

  const renderBoxes = state.boxes.map((el) => (
    <div ata-aos-duration={1100} data-aos={el.aos} key={el.id} className={s.boxes}>
      <img src={el.img} alt='' />
      <div className={s.title}>{el.title}</div>
      <div className={s.price}>{el.price} грн</div>
      <a onClick={() => isActive(true)}>Выбрать</a>
    </div>
  ));

  return <>{renderBoxes}</>;
};

export default Boxes;
