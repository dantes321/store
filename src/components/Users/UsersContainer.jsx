import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setLoadingAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";


let mapStoreToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoaded: state.usersPage.isLoaded,

    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        currentPage:(currentPage) => {dispatch(setCurrentPageAC(currentPage))},
        loadingStatus: (loadStatus) => {dispatch(setLoadingAC(loadStatus))},
    }
}

const UsersContainer = connect(mapStoreToProps,mapDispatchToProps)(Users)

export default UsersContainer;