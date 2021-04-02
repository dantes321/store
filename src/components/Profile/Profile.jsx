import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.profileInner}>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        </div>
    );
};

export default Profile;
