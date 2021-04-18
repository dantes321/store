import React from 'react';
import s from './ModalWindow.module.scss';

const ModalWindow = ({ active, isActive }) => (
  <div
    role='presentation'
    className={active ? `${s.ModalWindow} ${s.active}` : s.ModalWindow}
    onClick={() => isActive(false)}
  >
    <div role='presentation' className={s.ModalWindowBody} onClick={(e) => e.stopPropagation()} />
  </div>
);

export default ModalWindow;
