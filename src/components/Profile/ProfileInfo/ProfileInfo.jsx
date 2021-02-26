import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) =>{
    if(!props.profile) {
        return <Preloader/>
    }


    return(
        <div className={s.profileInfo}>
            <div><img src={props.profile.photos.large} alt="###"/></div>
            <div className={s.about}>
                <p><h3>{props.profile.aboutMe}</h3></p>
                <p><h4>Ukraine,Pavlograd</h4></p>
                <p>This is my social : {props.profile.contacts.facebook}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;