const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {
            id: 1,
            photo: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
            name: 'Alex Petrov',
            status: 'Im looking for a job',
            location: {country: 'Belarus', city: 'Minsk'},
            isFollowed: false
        },
        {
            id: 2,
            photo: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
            name: 'Dima Prima',
            status: 'Im so pretty',
            location: {country: 'Russia', city: 'Sochi'},
            isFollowed: true
        },
        {
            id: 3,
            photo: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
            name: 'Vasya Galkin',
            status: 'Dance wherever you want!',
            location: {country: 'Ukraine', city: 'Kiev'},
            isFollowed: false
        },
    ]
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
                    console.log(u.isFollowed)
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
                    console.log(u.isFollowed)
                    return u;
                })
            }
    }

    return state;
}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export default usersReducer;