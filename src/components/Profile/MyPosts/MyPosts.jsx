import React from "react";
import s from './MyPosts.module.css'
import MyPost from "./MyPost/MyPost";
import {addPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let newPostItems = props.PostsItems.map(el => <MyPost text ={el.text}/>)
    let newPostItem = React.createRef()

    let addPost = () =>{
        let newText = newPostItem.current.value
        props.dispatch(addPostActionCreator(newText))
        newPostItem.current.value = ''
    }



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