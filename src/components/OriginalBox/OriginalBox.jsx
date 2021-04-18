import React from 'react';
import s from './OriginalBox.module.scss';
import Boxes from './Boxes/Boxes';

const OriginalBox = ({ boxes }) => (
  <div className={s.OriginalBox}>
    <div className={s.originalBoxContainer}>
      <div className={s.box}>
        <Boxes boxes={boxes} />
      </div>
    </div>
  </div>
);

export default OriginalBox;
