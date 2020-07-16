import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT, USER_RESET_PASSWORD, USER_UPDATE, UPDATE_WAIT } from './actionTypes';


export const loginUser = (user) => (
    {
        type: USER_LOGIN,
        user: user
    }
)

export const signupUser = (user) => (
    {
        type: USER_SIGNUP,
        user: user
    }
)

export const logoutUser = () => (
    {
        type: USER_LOGOUT,
    }
)

export const resetPassword = (user) => (
    {
        type: USER_RESET_PASSWORD,
        user: user
    }
)

export const updateUser = (user) => (
    {
        type: USER_UPDATE,
        user: user
    }
)

export const updateWait = (wait) => (
    {
        type: UPDATE_WAIT,
        wait: wait
    }
)


