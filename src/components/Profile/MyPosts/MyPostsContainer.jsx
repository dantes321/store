import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addNewPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

let mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
        newPostMessage: state.profilePage.newPostMessage,

    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText: (text) =>{
            dispatch(updateNewPostTextAC(text))
        },
        addNewPost: () => {
            dispatch(addNewPostAC())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyPosts)