const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_ITEM = 'UPDATE-NEW-POST-ITEM'

let initialState = {
    posts: [
        {id: 1, text: 'Hello, World!'},
        {id: 2, text: 'Hello, my friends!'},
        {id: 3, text: 'Im here!'},
    ],
    newPostItem : '',
}

let profileReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST :
            let newPost ={
                id: 4,
                text: state.newPostItem,
            }
            state.posts.push(newPost)
            state.newPostItem = ''
            return state;

        case UPDATE_NEW_POST_ITEM:
            state.newPostItem = action.newText
            return state;

    }


    return state;
}

export const addPostAC = () => (
    {
        type: ADD_POST
    }
)
export const updateNewPostTextAC = (text) => (
    {
        type: UPDATE_NEW_POST_ITEM,
        newText: text,
    }
)

export default profileReducer;