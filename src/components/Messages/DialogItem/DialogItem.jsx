import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let link = `/messages/${props.id}`
    return (
        <div className={s.dialogItem}>
            <img src={props.src} alt=""/>

                <NavLink className={s.dialogNav} activeClassName ={s.dialogNavActive} to={link}>{props.name}</NavLink>

        </div>
    );
};

export default DialogItem;
