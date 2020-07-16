import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT, USER_RESET_PASSWORD, USER_UPDATE, UPDATE_WAIT } from '../actions/actionTypes'

const initialState = {
    user: {},
    userLogedIn: false,
    errorMessage: null,
    wait: true,
    themeColor: '#23b4fc'
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            console.log(action.user);
            return {
                ...state,
                userLogedIn: true,
                user: action.user
            };
        case USER_SIGNUP:
            console.log(action.user);
            return {
                ...state,
                user: action.user
            };
        case USER_LOGOUT:
            return {
                ...state,
                userLogedIn: false
            };
        case USER_RESET_PASSWORD:
            return {
                ...state,
                user: action.user
            };
        case USER_UPDATE:
            return {
                ...state,
                user: action.user
            };
        
        case UPDATE_WAIT:
            return {
                ...state,
                wait: action.wait
            };
        default:
            return state;
    }
}

export default userReducer;