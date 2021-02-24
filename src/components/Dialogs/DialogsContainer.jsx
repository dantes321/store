import React from "react";
import {sendMessageAC, updateMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateMessageText: (text) => {
            dispatch(updateMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;