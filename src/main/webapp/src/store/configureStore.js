/**
 * Created by sleepbear on 2016. 6. 11..
 */
import React from 'react';
import { createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import reducer from '../reducers/index';

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
}