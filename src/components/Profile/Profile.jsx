import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.profileInner}>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </div>
    );
};

export default Profile;
