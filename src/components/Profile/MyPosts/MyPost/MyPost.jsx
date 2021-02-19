import React from "react";
import s from './MyPost.module.css'

const MyPost = (props) => {

    return (
        <div className={s.myPost}>
            <img src="https://dota2.ru/img/heroes/pudge/portrait.jpg" alt=""/>
            {props.text}
        </div>
    )
}

export default MyPost