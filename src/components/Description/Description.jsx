import React from 'react';
import s from './Description.module.scss';

const Description = () => {
    return (
        <div className={s.description}>
            <div className={s.text}><span>Твій бокс</span> – сервіс подарунків, які економлять ваш час та нерви. Ми вже попіклувались, щоб в подарунку всі елементи чудово гармоніювали між собою та створювали приємні емоції. Обирай серед готових варіантів або <a
                href="#">створи свій бокс</a></div>
            <div className={s.founder}>
                <a target='_blank' href="https://www.instagram.com/veronika18.10.99/"><img src="https://sun6-22.userapi.com/s/v1/if1/7JzdD-vW_43AzpHddqOjlJMWhTJEy5xZEfHjhKk7RTIVauChK0Vjh-Cql5MQnF7J-GkLzA.jpg?size=200x0&quality=96&crop=117,67,561,561&ava=1" alt=""/></a>
                <div className={s.name}>Бурминова Вероніка</div>
                <div className={s.work}>Засновник</div>
            </div>
            <div className={s.decoration}></div>
        </div>
    );
};

export default Description;
