/**
 * Created by sleepbear on 2016. 6. 11..
 */

import React from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/User'

import Login from '../components/login/Login';


class LoginContainer extends React.Component {

    render() {
        return (
            <Login login={this.props.login}></Login>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login : (loginMemberInfo) => {
            dispatch(login(loginMemberInfo))
        }
    }
};
export default connect(undefined, mapDispatchToProps)(LoginContainer);