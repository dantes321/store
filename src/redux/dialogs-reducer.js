
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT' ;

let initialState = {
    messages: [
        {id:1, message: 'Hello, Alex!!!'},
        {id:2, message: 'Id like to ask you'},
        {id:3, message: 'Where is my money??'},
    ],
    names:[
        {id:1, name:"Alex"},
        {id:2, name:"Roma"},
        {id:3, name:"Vasya"},
    ],
    updateMessageText: '',
}

let dialogsReducer = (state = initialState, action) => {

    switch (action.type){
        case SEND_MESSAGE:
            state.messages.push({id:4,message:state.updateMessageText})
            state.updateMessageText = ''
            return state;

        case UPDATE_MESSAGE_TEXT:
            state.updateMessageText = action.text
            return state;
    }

    return state;
}

export const sendMessageAC = () => (
    {
        type: SEND_MESSAGE
    }
)

export const updateMessageTextAC = (text) => (
    {
        type: UPDATE_MESSAGE_TEXT,
        text: text
    }
)

export default dialogsReducer;