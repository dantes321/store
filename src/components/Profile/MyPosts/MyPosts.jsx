import React from "react";
import s from './MyPosts.module.css'
import MyPost from "./MyPost/MyPost";

const MyPosts = (props) => {
    let newPostItems = props.PostsItems.map(el => <MyPost text ={el.text}/>)

    let addPost = () =>{
        alert(newPostItem.current.value)
    }
    let newPostItem = React.createRef()

    return (
        <div className={s.myPosts}>

            <div className={s.addPost}>
                <div><textarea ref={newPostItem} placeholder='Add new post..'></textarea></div>
                <button onClick={addPost} className='btn btn-success'>Add post</button>
            </div>

            {newPostItems}


        </div>
    )
}

export default MyPosts