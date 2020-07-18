import { ADD_POST, DELETE_POST } from './actionTypes';


export const addPost = (post) => (
    {
        type: ADD_POST,
        post: post
    }
)

export const deletePost = (key) => (
    {
        type: DELETE_POST,
        id: id
    }
)
