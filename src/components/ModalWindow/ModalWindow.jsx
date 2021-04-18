import React from 'react';
import s from './ModalWindow.module.scss';

const ModalWindow = ({active,isActive}) => {
    return (
        <div className={active? `${s.ModalWindow} ${s.active}`: s.ModalWindow} onClick={() => isActive(false)}>
            <div className={s.ModalWindowBody} onClick={(e) => e.stopPropagation()}>

            </div>
        </div>
    );
};

export default ModalWindow;
