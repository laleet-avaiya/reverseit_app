import { createStore, combineReducers } from 'redux';
import postReducer from './reducers/postReducer';

const rootReducer = combineReducers({
    postReducer: postReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;