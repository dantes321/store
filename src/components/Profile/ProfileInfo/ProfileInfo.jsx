import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) =>{
    return(
        <div className={s.profileInfo}>
            <div><img src="http://sun9-39.userapi.com/s/v1/ig2/8aqATIMGN_0ucbrpPT2w9-Od9s4_R-28vuF1rs263b_AnT8lBidXi9Tp1qazfob7TONkocJPt4t4cK1Z6ZOpdx3e.jpg?size=200x0&quality=96&crop=35,35,1002,1009&ava=1" alt="###"/></div>
            <div className={s.about}>
                <p><h3>Alex Petrov , 23, y.o.</h3></p>
                <p><h4>Ukraine,Pavlograd</h4></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolore excepturi perferendis qui repellendus! Ab at magni possimus quisquam vel!</p>
            </div>
        </div>
    )
}

export default ProfileInfo;