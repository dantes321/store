

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-POST-TEXT';

const messagesReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.MessageItemText = action.newText


            return state;
        case ADD_NEW_MESSAGE:
            state.MessageItems.push({id: 6, text: state.MessageItemText, isDeleted: false})
            state.MessageItemText = ""

            return state;


        default:
            return state;
    }
}
export const updateNewMessageTextAC = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,

    }
}
export const addNewMessageAC = () => {
    return {
        type: ADD_NEW_MESSAGE,

    }
}


export default messagesReducer;