import React, {useState} from 'react';
import s from './Item.module.scss';

const Item = ({img,title,description,price}) => {

    return (
        <div className={s.item}>
            <img src={img} alt=""/>
            <div className={s.text}>
                <div className={s.title}>{title}</div>
                <div className={s.description}>{description}</div>
                <div className={s.price}><h4>{price} грн. </h4></div>
                <div className={s.buttons}>
                    <a href="#">Детальніше</a>
                    <a href="#">В кошик</a>
                </div>
            </div>

        </div>
    );
};

export default Item;
