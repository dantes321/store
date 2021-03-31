import React from 'react';
import s from './AuthPage.module.css'
const AuthPage = () => {
    return (
        <div className={s.authPage}>
            <div className={s.imgBox}>
                <img src="https://cdn.pixabay.com/photo/2018/07/25/08/59/business-3560933_960_720.jpg" alt=""/>
            </div>
            <div className={s.contentBox}>
                <div className={s.forms}>
                    <h2>Login</h2>
                    <form action="">
                        <div className={s.formBox}>
                            <span>Login</span>
                            <input type="text"/>
                        </div>
                        <div className={s.formBox}>
                            <span>Password</span>
                            <input type="password"/>
                        </div>
                        <label htmlFor="">Dont have an account ? <a href="#"> Sign up</a></label>
                        <div className={s.formBox}>
                            <input type="submit" value='Sign in'/>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AuthPage;
