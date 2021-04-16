import React from 'react';
import s from './NewBox.module.scss';


const NewBox = () => {
    return (
        <div className={s.newBox}>
            <div className={s.boxContainer}>
                <div className={s.title}>Нужен четкий Сюрприз-Бокс?</div>
                <div className={s.subtitle}>Наш сервис случайных подарков поможет Вам!</div>
                <a href="#">Выбрать бокс</a>
            </div>
        </div>
    );
};

export default NewBox;
