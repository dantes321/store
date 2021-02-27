import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ava from './../../../images/ava.png'
import myava from './../../../images/myava.jpg'

const ProfileInfo = (props) => {
    if (!props.profile) {

        return <div className={s.profileInfo}>
            <div className={s.profileAvatar}><img src={myava} alt=""/></div>
            <p><h3>Alex Petrov</h3></p>
            <p><h4>Ukraine,Pavlograd</h4></p>
            <p>This is my social : VK , FACEBOOK</p>
        </div>
    }
    else

    return (
        <div className={s.profileInfo}>
            <div><img src={props.profile.photos.large != null ? props.profile.photos.large : ava} alt="###"/></div>
            <div className={s.about}>
                <p><h3>{props.profile.fullName}</h3></p>
                <p><h4>Ukraine,Pavlograd</h4></p>
                <p>This is my social : {props.profile.contacts.facebook}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;