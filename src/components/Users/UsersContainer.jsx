import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC} from "../../redux/users-reducer";


let mapStoreToProps = (state) =>{
    return{
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
    }
}

const UsersContainer = connect(mapStoreToProps,mapDispatchToProps)(Users)

export default UsersContainer;