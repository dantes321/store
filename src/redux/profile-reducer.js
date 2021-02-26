const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_ITEM = 'UPDATE-NEW-POST-ITEM'
const SET_NEW_PROFILE_PAGE = 'SET_NEW_PROFILE_PAGE'

let initialState = {
    posts: [
        {id: 1, text: 'Hello, World!'},
        {id: 2, text: 'Hello, my friends!'},
        {id: 3, text: 'Im here!'},
    ],
    newPostItem : '',
    profile: null,
}

let profileReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST :
            let newPost = {
                id: 4,
                text: state.newPostItem,
            }
            return {
                ...state,
                newPostItem: '',
                posts: [...state.posts,newPost],

            }


        case UPDATE_NEW_POST_ITEM:
            return {
                ...state,
                newPostItem: action.newText
            }

        case SET_NEW_PROFILE_PAGE:
            return {
                ...state,
                profile: action.page,
            }
    }


    return state;
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_ITEM,newText: text})
export const setNewProfilePageAC = (page) => ({type:SET_NEW_PROFILE_PAGE,page})

export default profileReducer;