import React, { useState } from 'react';
import 'aos/dist/aos.css';
import ModalWindow from '../../ModalWindow/ModalWindow';

import s from './Boxes.module.scss';

const Boxes = (props) => {
  const [active, isActive] = useState(false);

  return props.boxes.map((el) => (
    <div ata-aos-duration={1100} data-aos={el.aos} key={el.id} className={s.boxes}>
      <img src={el.img} alt='' />
      <div className={s.title}>{el.title}</div>
      <div className={s.price}>{el.price} грн</div>
      <a href='/#' onClick={() => isActive(true)}>
        Выбрать
      </a>
      <ModalWindow active={active} isActive={isActive} />
    </div>
  ));
};

export default Boxes;
