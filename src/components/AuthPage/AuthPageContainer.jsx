import React from 'react';
import AuthPage from "./AuthPage";
import {connect} from "react-redux";
import {setUsersAC} from "../../redux/authReducer";


let mapStateToProps = (state) =>{
    return{
        authData: state.authPage.authData,

    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        setUsers: (login,password) =>{
            dispatch(setUsersAC(login,password))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthPage)
