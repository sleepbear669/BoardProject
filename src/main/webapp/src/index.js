/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link ,hashHistory} from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App/App'
import SignUp from './components/SignUp/SignUp'

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={App}></Route>
            <Route path="/signUp" component={SignUp}/>
        </Router>
    ),
    document.getElementById('app')
);
