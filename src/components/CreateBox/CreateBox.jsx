import React from 'react';
import s from './CreateBox.module.scss';

const CreateBox = () => {
    return (
        <div className={s.createBox}>
            <div className={s.text}>
                <div className={s.title}>Індивідуальний бокс</div>
                <div className={s.subtitle}>Створи свій власний бокс з наявних елементів</div>
                <a href="#">Створити свій бокс</a>
            </div>
        </div>
    );
};

export default CreateBox;
