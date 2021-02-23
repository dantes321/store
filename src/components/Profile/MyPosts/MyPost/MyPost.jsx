import React from "react";
import s from './MyPost.module.css'



const MyPost = (props) =>{

    return(
        <div className={s.myPost}>
            <img src="http://sun9-39.userapi.com/s/v1/ig2/8aqATIMGN_0ucbrpPT2w9-Od9s4_R-28vuF1rs263b_AnT8lBidXi9Tp1qazfob7TONkocJPt4t4cK1Z6ZOpdx3e.jpg?size=200x0&quality=96&crop=35,35,1002,1009&ava=1" alt=""/>
            <span>{props.text}</span>
        </div>
    )
}

export default MyPost;