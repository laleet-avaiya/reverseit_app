import { createStore, combineReducers } from 'redux';
import postReducer from './reducers/postReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    postReducer: postReducer,
    userReducer: userReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;