import React from "react";
import s from './Header.module.css'

const Header = (props) =>{
    return(
        <div className={s.header}>
            <div className={s.logo}>Logo</div>
            <div className={s.circle}></div>
        </div>
    )
}

export default Header;