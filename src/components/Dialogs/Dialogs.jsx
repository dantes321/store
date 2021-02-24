import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageAC, updateMessageTextAC} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let namesItems = props.dialogsPage.names.map(el => <DialogItem key ={el.id} name ={el.name} id ={el.id}/>)
    let messagesItems = props.dialogsPage.messages.map(el => <DialogItem key ={el.id} name ={el.message}/>)

    let sendMessage = () =>{
        props.sendMessage()
    }

    let updateMessageText = (text) => {
        let newText = text.target.value
        props.updateMessageText(newText)

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
                    value={props.dialogsPage.updateMessageText}
                    onChange={updateMessageText}></textarea>
                    </div>
                    <button className='btn btn-dark' onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;