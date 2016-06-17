/**
 * Created by sleepbear on 2016. 6. 9..
 */
import React from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import axios from '../../utils/AxiosClient'

import {login} from '../../actions/User'

const loginStyle = {
    box : {
        display: 'flex',
        alignItems : 'center',
        justifyContent: 'center'
    },
    item : {
        flex : 1
    }
};

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
        axios.put('/login',this.state.userInfo )
            .then(result => {
                this.props.login(result.data);
                this.context.router.goBack();
            }).catch(function (res) {
            console.log(res);
        });
    };
    onCancel = () => {
        this.context.router.goBack();
    };
    render() {
        return (
            <div style={loginStyle.box}>
                <div>
                    <TextField
                        hintText="ID"
                        name="accountName"
                        floatingLabelText="ID"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.userInfo.accountName}
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
                        <RaisedButton label="취소" onTouchTap={this.onCancel}/>
                    </div>
                </div>
            </div>
        )
    }
}
Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Login;