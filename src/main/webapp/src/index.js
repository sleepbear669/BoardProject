/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link ,hashHistory} from 'react-router'
import thunk from 'redux-thunk'

import { createStore , applyMiddleware,combineReducers } from 'redux';
import { Provider  } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/app/App';
import SignUp from './components/signUp/SignUp';
import Login from './components/login/Login';

import commentReducer from './reducers/Comment';
import userReducer from './reducers/User';

const reducers = combineReducers({
        commentReducer,
        userReducer
    }
);

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}/>
                <Route path="/login" component={Login}/>
                <Route path="/signUp" component={SignUp}/>
            </Router>
        </Provider>
    ),
    document.getElementById('app')
);
