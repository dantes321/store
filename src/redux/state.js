import {rerenderEntireTree} from "../index";

const ADD_POST = 'ADD-POST';

let store = {
    _state: {
        PostsItems: [
            {id: 1, text: 'Hello, my friend!'},
            {id: 2, text: 'My name is Pudge!'},
            {id: 3, text: 'Yeahhhhhhhhhhhhhhhhhhhh!'},
        ]

    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.PostsItems.length + 1,
                text: action.newText,
            }
            this._state.PostsItems.push(newPost)
            rerenderEntireTree()
        }

    }
}

export const addPostActionCreator = (newText) => {

    return {
        type: ADD_POST,
        newText: newText,
    }
}


window.store = store;
export default store;