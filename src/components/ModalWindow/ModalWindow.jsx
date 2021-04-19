import React, { useContext } from 'react';
import s from './ModalWindow.module.scss';
import { OriginalBoxContext } from '../../context/originalBox-context';

const ModalWindow = () => {
  const { active, isActive } = useContext(OriginalBoxContext);

  return (
    <div
      role='presentation'
      className={active ? `${s.ModalWindow} ${s.active}` : s.ModalWindow}
      onClick={() => isActive(false)}
    >
      <div role='presentation' className={s.ModalWindowBody} onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default ModalWindow;
