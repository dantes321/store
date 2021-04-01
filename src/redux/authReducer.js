
const SET_USERS = 'SET_USERS';

let initialState = {
    authData: {login: '1234' , password: '1234' , id: 1, isAuth: false}
}

const authReducer = (state=initialState,action) => {
    switch (action.type){

        case SET_USERS:

            if(action.login === state.authData.login && action.pass === state.authData.password){
                return {
                    ...state,
                    authData: {...state.authData, isAuth: true},

                }

            }

    }

    return state;
}

export let setUsersAC = (login,pass) => ({type: SET_USERS, login,pass})

export default authReducer;
