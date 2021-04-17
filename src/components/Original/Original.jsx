import React from 'react';
import s from './Original.module.scss';

const Original = () => {
    return (
        <div className={s.original}>
            <div className={s.originalContainer}>
                <div className={s.title}>Креативный Бокс-Сюрприз</div>
                <div className={s.subtitle}>Это оригинальная подарочная-коробочка с разнообразным наполнением внутри, но что именно будет там, вы узнаете только при открытии своего бокса!</div>
            </div>
        </div>
    );
};

export default Original;
