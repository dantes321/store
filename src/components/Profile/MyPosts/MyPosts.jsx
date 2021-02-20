import React from "react";
import s from './MyPosts.module.css'
import MyPost from "./MyPost/MyPost";
import {addPostActionCreator, updateNewPostTextAC} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let newPostItems = props.profilePage.PostsItems.map(el => <MyPost text ={el.text}/>)


    let addPost = () =>{

        props.dispatch(addPostActionCreator())
    }
    let updateNewPostText = (text) =>{
        let newText = text.target.value;
        props.dispatch(updateNewPostTextAC(newText))
    }



    return (
        <div className={s.myPosts}>

            <div className={s.addPost}>
                <div>
                    <textarea
                    placeholder='Add new post..'
                    value={props.profilePage.PostItemText}
                    onChange={updateNewPostText}
                    />
                </div>
                <button onClick={addPost} className='btn btn-success'>Add post</button>
            </div>

            {newPostItems}


        </div>
    )
}

export default MyPosts