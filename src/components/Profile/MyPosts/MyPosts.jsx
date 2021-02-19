import React from "react";
import s from './MyPosts.module.css'
import MyPost from "./MyPost/MyPost";

const MyPosts = (props) => {
    let newPostItem = props.PostsItems.map(el => <MyPost text ={el.text}/>)

    return (
        <div className={s.myPosts}>

            <div className={s.addPost}>
                <div><textarea placeholder='Add new post..'></textarea></div>
                <button className='btn btn-success'>Add post</button>
            </div>

            {newPostItem}


        </div>
    )
}

export default MyPosts