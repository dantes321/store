import React from 'react';
import s from './Store.module.scss';
import Boxes from "./Boxes/Boxes";

const Store = (props) => {

    return (
        <div className={s.store}>
            <div className={s.storeContainer}>
                <div className={s.title}>Тематические Сюрприз-Боксы</div>
                <div className={s.subtitle}>Заказывая тематический подарок, вы не будете знать, какие предметы лежат внутри, но эти предметы будут точно соответствовать тематике выбранного бокса.</div>
                <div className={s.boxes}>
                    <Boxes boxes = {props.boxes}/>
                </div>

            </div>
        </div>
    );
};

export default Store;
