/**
 * Created by sleepbear on 2016. 6. 11..
 */

import React from 'react';

import { Router, Route, Link ,hashHistory} from 'react-router'

import MainContainer from './MainContainer';
import LoginContainer from './LoginContainer';
import SignContainer from './SignUpContainer'

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={MainContainer}/>
                <Route path="/login" component={LoginContainer}/>
                <Route path="/signUp" component={SignContainer}/>
            </Router>
        )
    }
}

export default App;