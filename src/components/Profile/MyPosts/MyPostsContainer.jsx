import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text) =>{
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;