import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) =>{

    let state = props.store.getState()

    let addPost =() =>{
        props.store.dispatch(addPostAC())
    }
    let updateNewPostText = (text) =>{
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return(
        <MyPosts
            updateNewPostText = {updateNewPostText}
            addPost = {addPost}
            posts = {state.profilePage.posts}
            newPostItem = {state.newPostItem}/>
    )
}

export default MyPostsContainer;