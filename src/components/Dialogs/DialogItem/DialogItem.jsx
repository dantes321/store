import React from "react";
import s from './DialogItem.module.css'

const DialogItem = (props) => {
    return (


        <div className={s.dialogItem}>
            <div className={s.dialogs}>
                <div>{props.name}</div>
            </div>
            <div className={s.messages}>
                <div>{props.message}</div>

            </div>
        </div>
    )
}

export default DialogItem;