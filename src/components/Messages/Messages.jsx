import React from 'react';
import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addNewMessageAC, updateNewMessageTextAC} from "../../redux/messages-reducer";



const Messages = (props) => {
    let newDialogItem = props.state.messagePage.DialogItems.map(el => <DialogItem
        id={el.id}
        name={el.name}
        src={el.src}/>)
    let newMessageItem = props.state.messagePage.MessageItems.map(el => <MessageItem
        id={el.id}
        text={el.text}
        status={el.isDeleted}/>)

    let addNewMessage = () => {
        props.dispatch(addNewMessageAC())
    }
    let updateNewMessageText = (text) => {
        let newText = text.target.value
        props.dispatch(updateNewMessageTextAC(newText))
    }


    return (

        <div>
            <h2>Dialogs</h2>
            <div className={s.messages}>
                <div className={s.dialogs}>

                    {newDialogItem}

                </div>
                <div className={s.dialogMessages}>

                    {newMessageItem}
                    <div className={s.newMessageItem}>

                        <textarea
                            onChange={updateNewMessageText}
                            placeholder='Enter your message'
                            value={props.state.messagePage.MessageItemText}
                        />
                        <div>
                            <button onClick={addNewMessage} className='btn btn-dark'>Send</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Messages;
