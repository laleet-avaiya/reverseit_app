import { ADD_POST, DELETE_POST } from '../actions/actionTypes'

const initialState = {
    postList: [
        {
            id: 1,
            title: "Looking for Used Lenovo Z500 Charger Original.",
            description: "Looking for Used Lenovo Z500 Charger Original, Only adapter is also fine.",
            postOn: Date().toLocaleString()
        }
    ],
    title: 'Welcome to ReverseIt'
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postList: state.postList.concat(action.post)
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