const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_NEW_POST ='ADD_NEW_POST'

let initialState = {
    posts:[
        {text:'Hello,my friends!',id:1,img:'https://pbs.twimg.com/profile_images/1205126924185550848/lNwsk7VE_400x400.jpg'},
        {text:'How are you?',id:2,img:'https://pbs.twimg.com/profile_images/1205126924185550848/lNwsk7VE_400x400.jpg'},
    ],
    newPostMessage: ''
}

const profileReducer =(state=initialState,action) =>{

    switch (action.type){
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostMessage: action.text
            }
        case ADD_NEW_POST:
            if(state.newPostMessage.length !== 0)
            return {
                ...state,
                posts:[...state.posts,{id:3,img:"https://pbs.twimg.com/profile_images/1205126924185550848/lNwsk7VE_400x400.jpg",
                    text: state.newPostMessage}],
                newPostMessage: ''
            }
    }

    return state;
}

export const updateNewPostTextAC = (text) => ({type:UPDATE_NEW_POST_TEXT,text});
export const addNewPostAC = () => ({type:ADD_NEW_POST});

export default profileReducer;