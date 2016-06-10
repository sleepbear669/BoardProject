/**
 * Created by sleepbear on 2016. 6. 9..
 */
import React from 'react';
import {connect} from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import axios from '../../utils/AxiosClient'

import {login} from '../../actions/User'

class Login extends React.Component {

    state = {
        userInfo: {
            accountName: "",
            password: ""
        }
    };

    handleChange = (e) => {
        const userInfo = this.state.userInfo;
        userInfo[e.target.name] = e.target.value;
        this.setState(userInfo);
    };

    onLogin = () => {
        this.props.login(this.state.userInfo);
    };

    send = () => {
        console.log(this.state.userInfo);
        axios.post('/member/session', this.state.userInfo)
            .then(result => {
                console.log(result);
            });
    };

    test = () => {
        axios.post('/session')
            .then(result => {
                console.log(result);
            });
    };
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <TextField
                        hintText="ID"
                        name="accountName"
                        floatingLabelText="ID"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.userInfo.accountId}
                    /><br />
                    <TextField
                        hintText="Password"
                        name="password"
                        floatingLabelText="Password"
                        type="password"
                        value={this.state.userInfo.password}
                        onChange={this.handleChange}
                    /><br />
                    <div>
                        <RaisedButton label="로그인" onTouchTap={this.onLogin}/>
                        <RaisedButton label="취소"/>
                        <RaisedButton label="test" onTouchTap={this.test}/>
                        <RaisedButton label="send" onTouchTap={this.send}/>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Login;