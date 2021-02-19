import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.profileInfo}>
                <img src="https://dota2.ru/img/heroes/pudge/portrait.jpg" alt=""/>
                <div className={s.description}>
                    <p><h4>Pudge Petrov, 23 y.o.</h4></p>
                    <p><h5>Ukraine, Kiev</h5></p>
                    <p>Not that is wolf who is not a wolf. Wolf is that - who is wolf</p>
                </div>
            </div>

            <div className={s.myPosts}>My Posts

                <MyPosts dispatch ={props.dispatch} PostsItems={props.state.PostsItems}/>


            </div>


        </div>
    )
}

export default Profile