/**
 * Created by sleepbear on 2016. 6. 3..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import style from './NavBar.css';
import { Router, Route, Link ,hashHistory} from 'react-router';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {open} from '../../actions/Modal'

const propTypes = {
    dispatch: React.PropTypes.func
};

class NavBar extends React.Component {

    _handleWriteClick = () => {
        const {dispatch} = this.props;
        if (this.props.user.isLogin) {
            dispatch(open());
        }else {
            this.context.router.push('/login');

        }
    };
    render() {
        const writeButton = <RaisedButton onTouchTap={this._handleWriteClick}>글쓰기</RaisedButton>;
        const memberNav = <MemberNav write={writeButton}/>;
        const nonmemberNav = <NonmemberNav write={writeButton}/>;
        return (
            <div>
                { this.props.user.isLogin ? memberNav: nonmemberNav}
            </div>
        )

    }
}

class MemberNav extends React.Component{
    render (){
        return (
            <div>
                <span>잠자는곰</span>
                <Link to="/profile">
                    <RaisedButton label="프로필 변경" />
                </Link>
                {this.props.write}
            </div>
        )
    }
}

class NonmemberNav extends React.Component{
    render (){
        return (
            <div>
                <Link to='/signUp'>
                    <RaisedButton>
                        회원가입
                    </RaisedButton>
                </Link>
                {this.props.write}
            </div>
        )
    }
}

NavBar.propsTypes = propTypes;

NavBar.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default NavBar;