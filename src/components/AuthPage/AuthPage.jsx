import React from 'react';
import s from './AuthPage.module.css'
import {Redirect} from "react-router-dom";

const AuthPage = (props) => {
    let loginText = React.createRef()
    let passText = React.createRef()

    let setUsers = () =>{
        let login = loginText.current.value;
        let pass = passText.current.value;
        props.setUsers(login,pass)
        console.log((props.authData.isAuth))


    }

    if(props.authData.isAuth) return <Redirect to = './profile'/>

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
                            <input type="text" ref={loginText}/>
                        </div>
                        <div className={s.formBox}>
                            <span>Password</span>
                            <input type="password" ref={passText}/>
                        </div>
                        <label htmlFor="">Dont have an account ? <a href="#"> Sign up</a></label>
                        <div className={s.formBox}>

                            <input onClick={setUsers}  type="submit" value='Sign in'/>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AuthPage;
