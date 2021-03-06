const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_LOADING = 'SET_LOADING';

let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 30,
    currentPage: 1,
    isLoaded: false,

}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollowed: true}
                    }

                    return u;
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollowed: false}
                    }

                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],

            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_LOADING:
            return {
                ...state,
                isLoaded: action.loadStatus
            }


    }

    return state;
}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type:SET_USERS,users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setLoadingAC = (loadStatus) => ({type: SET_LOADING, loadStatus})


export default usersReducer;