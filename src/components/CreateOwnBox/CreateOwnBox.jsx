import React from 'react';
import s from './CreateOwnBox.module.scss';
import Description from "../Description/Description";

const CreateOwnBox = (props) => {
    return (
        <div className={s.CreateOwnBox}>
            <div className={s.topBox}>
                <div className={s.text}>
                    <div className={s.title}>Індивідуальний бокс</div>
                    <div className={s.subtitle}>Створи свій власний бокс з наявних елементів</div>
                    <span className={s.arrow}></span>
                </div>
            </div>
            <div className={s.description}>
                <div className={s.text}>Якщо серед готових боксів немає саме такого поєднання елементів, яке б ти хотів,
                    то пропоную створити свій власний бокс. Для цього ми зробили класний конструктор ;)
                </div>
                <div className={s.founder}>
                    <a target='_blank' href="https://www.instagram.com/veronika18.10.99/"><img src="https://sun6-22.userapi.com/s/v1/if1/7JzdD-vW_43AzpHddqOjlJMWhTJEy5xZEfHjhKk7RTIVauChK0Vjh-Cql5MQnF7J-GkLzA.jpg?size=200x0&quality=96&crop=117,67,561,561&ava=1" alt=""/></a>
                    <div className={s.name}>Бурминова Вероніка</div>
                    <div className={s.work}>Засновник</div>

                </div>
            </div>

        </div>
    );
};

export default CreateOwnBox;
