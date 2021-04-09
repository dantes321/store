import React from 'react';
import s from './CreateOwnBox.module.scss';
import ConstructorBox from "../ConstructorBox/Constructor";

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
                    <a target='_blank' href="https://www.instagram.com/veronika18.10.99/"><img
                        src="https://sun6-22.userapi.com/s/v1/if1/7JzdD-vW_43AzpHddqOjlJMWhTJEy5xZEfHjhKk7RTIVauChK0Vjh-Cql5MQnF7J-GkLzA.jpg?size=200x0&quality=96&crop=117,67,561,561&ava=1"
                        alt=""/></a>
                    <div className={s.name}>Бурминова Вероніка</div>
                    <div className={s.work}>Засновник</div>

                </div>
            </div>
            <div className={s.instruction}>
                <div className={s.decoration}></div>
                <div className={s.title}>Як це працює</div>
                <div className={s.blocks}>
                    <div className={s.leftBlock}>
                        <div className={s.titleBlock}>Обери коробку</div>
                        <div className={s.subtitleBlock}>Обери необхідний матеріал та розмір твого боксу.</div>
                        <span>1</span>
                    </div>
                    <div className={s.rightBlock}>
                        <div className={s.titleBlock}>Обери солодощі та напої</div>
                        <div className={s.subtitleBlock}>Обери бажані солодощі та напоїв та вкажи їх кількість. В нас
                            чималий вибір;)
                        </div>
                        <span>2</span>
                    </div>
                    <div className={s.leftBlock}>
                        <div className={s.titleBlock}>Додай трохи дрібниць</div>
                        <div className={s.subtitleBlock}>Дрібні солодощі чудово довершають будь-який бокс та роблять
                            його вигляд більш гармонійним. Обери бажані
                        </div>
                        <span>3</span>
                    </div>
                    <div className={s.rightBlock}>
                        <div className={s.titleBlock}>Обери предмети</div>
                        <div className={s.subtitleBlock}>Обери предмети, що бажаєш бачити у своєму боксі</div>
                        <span>4</span>
                    </div>
                    <div className={s.leftBlock}>
                        <div className={s.titleBlock}>Обери листівку</div>
                        <div className={s.subtitleBlock}>Обери розмір та дизайн листівки. Всі листівки нашого власного
                            виробництва.
                        </div>
                        <span>5</span>
                    </div>
                    <div className={s.rightBlock}>
                        <div className={s.titleBlock}>Оформи замовлення</div>
                        <div className={s.subtitleBlock}>Перейдіть до кошика та оформіть замовлення</div>
                        <span>6</span>
                    </div>
                </div>
                <a href="/createbox">Створити свій ідеальний бокс</a>
            </div>
            <div className={s.constructor}>
                <div className={s.title}>[ розпочнемо ]</div>
                <div className={s.subtitle}>Обери коробку</div>
                <ConstructorBox />
            </div>

        </div>
    );
};

export default CreateOwnBox;
