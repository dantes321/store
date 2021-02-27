import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setNewProfilePageAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then((response) => {
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

let WithUrlDataContainerComponent =  withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);