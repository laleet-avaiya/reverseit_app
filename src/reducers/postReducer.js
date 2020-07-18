import { ADD_POST, DELETE_POST } from '../actions/actionTypes'

const initialState = {
    postList: [
        {
            id: 1,
            title: "Looking for Used Lenovo Z500 Charger Original.",
            description: "Looking for Used Lenovo Z500 Charger Original, Only adapter is also fine."
        },
        {
            id: 2,
            title: "Looking for Used Lumia 500 mobile phone.",
            description: "I want lumia 500 mobile phone. non functional phone is also fine."
        },
        {
            id: 3,
            title: "Looking for Used Lumia 500 mobile phone.",
            description: "I want lumia 500 mobile phone. non functional phone is also fine."
        },
        {
            id: 4,
            title: "Looking for Used Lumia 500 mobile phone.",
            description: "I want lumia 500 mobile phone. non functional phone is also fine."
        },
        {
            id: 5,
            title: "Looking for Used Lumia 500 mobile phone.",
            description: "I want lumia 500 mobile phone. non functional phone is also fine."
        },
        {
            id: 6,
            title: "Looking for Used Lumia 500 mobile phone.",
            description: "I want lumia 500 mobile phone. non functional phone is also fine."
        },
        {
            id: 7,
            title: "Looking for Used Lenovo Z500 Charger Original.",
            description: "Looking for Used Lenovo Z500 Charger Original, Only adapter is also fine."
        },
        {
            id: 8,
            title: "Looking for Used Lumia 500 mobile phone.",
            description: "I want lumia 500 mobile phone. non functional phone is also fine."
        },
        {
            id: 9,
            title: "Looking for Used Lumia 500 mobile phone.",
            description: "I want lumia 500 mobile phone. non functional phone is also fine."
        },
        {
            id: 10,
            title: "Looking for Used Lumia 500 mobile phone.",
            description: "I want lumia 500 mobile phone. non functional phone is also fine."
        },
        {
            id: 11,
            title: "Looking for Used Lumia 500 mobile phone.",
            description: "I want lumia 500 mobile phone. non functional phone is also fine."
        },
        {
            id: 12,
            title: "Looking for Used Lumia 500 mobile phone.",
            description: "I want lumia 500 mobile phone. non functional phone is also fine."
        }
    ],
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