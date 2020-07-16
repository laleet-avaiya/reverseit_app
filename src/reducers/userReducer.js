import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT, USER_RESET_PASSWORD, USER_UPDATE } from '../actions/actionTypes'

const initialState = {
    user: {},
    userLogedIn: false,
    errorMessage: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                userLogedIn: true
            };
        case USER_SIGNUP:
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
        default:
            return state;
    }
}

export default userReducer;