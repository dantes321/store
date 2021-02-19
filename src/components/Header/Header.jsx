import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <div className={s.header}>
            <div className={s.headerInner}>
                <img className={s.logo} src='https://lh3.googleusercontent.com/9O8nwC6O5B78Nkm-uC2WzL113Mm3bCiH4b5TlbFxVU_k8rJa_8oD3zzXpLcP9tYX1_TV0w=s85  ' />

                <div className={s.navbar}>
                    <ul>
                        <li><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></li>
                        <li><NavLink activeClassName={s.active}  to="friends">Friends</NavLink></li>
                        <li><NavLink activeClassName={s.active}  to="/messages">Messages</NavLink></li>
                        <li><NavLink activeClassName={s.active}  to="/music">Music</NavLink></li>
                        <li><NavLink activeClassName={s.active}  to="/settings">Settings</NavLink></li>
                    </ul>
                </div>
                <div className={s.siteDesc}>Site for Biba's and Boba's</div>
            </div>
        </div>
    )
}

export default Header