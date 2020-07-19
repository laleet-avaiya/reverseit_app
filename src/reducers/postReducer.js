import { ADD_POST, DELETE_POST, SET_POST } from '../actions/actionTypes'

const initialState = {
    postList: [],
    title: 'Welcome to ReverseIt'
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postList: state.postList.concat(action.post)
            };

        case SET_POST:
            return {
                ...state,
                postList: action.post
            };
        case DELETE_POST:
            return {
                ...state,
                postList: state.postList.filter((post) => post.key != key)
            };
        default:
            return state;
    }
}

export default postReducer;