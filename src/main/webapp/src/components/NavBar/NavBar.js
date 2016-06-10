/**
 * Created by sleepbear on 2016. 6. 3..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import style from './NavBar.css';
import { Router, Route, Link ,hashHistory} from 'react-router';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class NavBar extends React.Component {
    state = {
        open: false,
        comment: " "
    };

    handleWriteClick = () => {
        this.context.router.push('/login');
    };

    handleClose = () => {
        this.setState({open: false});
    };
    handleChange = (e) => {
        this.setState({'comment' : e.target.value})
    };
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Write"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];

        return (
            <div>
                <button>
                    <Link to='/signUp'>회원가입</Link>
                </button>
                <button onTouchTap={this.handleWriteClick}>글쓰기</button>
                <Dialog
                    actions={actions}
                    title="글쓰기"
                    modal={true}
                    open={this.state.open}
                >
                    <TextField
                        hintText="댓글을 작성해주세요"
                        fullWidth={true}
                        onChange={this.handleChange}
                        value={this.state.comment}
                    >
                        <input type="text"/>
                    </TextField>
                </Dialog>
            </div>
        )

    }
}

NavBar.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default NavBar;