import { ADD_POST, DELETE_POST } from '../actions/types'

const initialState = {
    postList: [],
    title: 'Welcome to ReverseIt'
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postList: state.postList.concat({
                    key: Math.random(),
                    title: action.data
                })
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