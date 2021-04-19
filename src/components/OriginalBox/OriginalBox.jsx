import React from 'react';
import s from './OriginalBox.module.scss';
import Boxes from './Boxes/Boxes';

const OriginalBox = () => (
  <div className={s.OriginalBox}>
    <div className={s.originalBoxContainer}>
      <div className={s.box}>
        <Boxes />
      </div>
    </div>
  </div>
);

export default OriginalBox;
