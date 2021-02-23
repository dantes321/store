import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageAC, updateMessageTextAC} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let namesItems = props.store.getState().dialogsPage.names.map(el => <DialogItem name ={el.name} id ={el.id}/>)
    let messagesItems = props.store.getState().dialogsPage.messages.map(el => <DialogItem name ={el.message}/>)

    let sendMessage = () =>{
        props.store.dispatch(sendMessageAC())
    }

    let updateMessageText = (text) => {
        let newText = text.target.value
        props.store.dispatch(updateMessageTextAC(newText))

    }

    return (

        <div>
            <div><h2>Dialogs</h2></div>
            <div className={s.dialogs}>
                <div className={s.names}>
                    {namesItems}
                </div>
                <div className={s.messages}>
                    {messagesItems}
                    <div>
                        <textarea
                    placeholder='Enter a message ..'
                    value={props.store.getState().dialogsPage.updateNewPostText}
                    onChange={updateMessageText}></textarea>
                    </div>
                    <button className='btn btn-dark' onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;