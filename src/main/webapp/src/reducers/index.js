/**
 * Created by sleepbear on 2016. 6. 11..
 */

import {combineReducers } from 'redux';

import commentReducer from './Comment';
import userReducer from './User';
import modalReducer from './Modal';

const reducer = combineReducers({
        commentReducer,
        userReducer,
        modalReducer
    }
);

export default reducer;