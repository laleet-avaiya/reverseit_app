import { ADD_POST, DELETE_POST } from './types';


export const addPost = (post) => (
    {
        type: ADD_POST,
        data: post
    }
)

export const deletePost = (key) => (
    {
        type: DELETE_POST,
        key: key
    }
)