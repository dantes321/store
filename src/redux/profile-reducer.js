import {rerenderEntireTree} from "../index";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state,action) => {

    switch (action.type) {
        case ADD_POST:
            if(state.PostItemText.length>0 && !state.PostItemText.startsWith(' '))
                state.PostsItems.push({id: 5, text: state.PostItemText})
                state.PostItemText = ''

            return state;


        case UPDATE_NEW_POST_TEXT:
            state.PostItemText = action.text
            return state;


        default:
            return state;
    }
}

export const addPostActionCreator = () => {

    return {
        type: ADD_POST,
    }
}
export const updateNewPostTextAC = (newText) =>{
    return{
        type: UPDATE_NEW_POST_TEXT,
        text: newText,
    }

}

export default profileReducer;