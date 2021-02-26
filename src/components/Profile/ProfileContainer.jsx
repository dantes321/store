import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setNewProfilePageAC} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {


        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then((response) => {
            this.props.setNewProfilePage(response.data)
        })
    }

    render() {
        return <div>
            <Profile {...this.props.store} profile = {this.props.profile}/>

        </div>

    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNewProfilePage: (page) => {dispatch(setNewProfilePageAC(page))},

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);