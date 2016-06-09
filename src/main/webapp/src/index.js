/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link ,hashHistory} from 'react-router'
import thunk from 'redux-thunk'

import { createStore , applyMiddleware } from 'redux';
import { Provider  } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App/App'
import SignUp from './components/SignUp/SignUp'

import commentReducer from '../src/reducers/Comment'

const store = createStore(
    commentReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}></Route>
                <Route path="/signUp" component={SignUp}/>
            </Router>
        </Provider>
    ),
    document.getElementById('app')
);
