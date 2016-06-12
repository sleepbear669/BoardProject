/**
 * Created by sleepbear on 2016. 6. 11..
 */

import React from 'react';
import { connect } from 'react-redux';

import axios from '../../utils/AxiosClient';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import {close} from '../../actions/Modal';
import {initComment} from '../../actions/Comment';

class WriteModal extends React.Component {

    state = {
        comment: " ",
    };

    handleClose = () => {
        this.props.close();
    };
    handleWrite = () => {
        let id = this.props.user.member.id;
        let comment = this.state.comment;
        axios.post('/comments/' + id, {content: comment})
            .then(result => {
                this.props.update();
                this.props.close();
            });
    };


    handleChange = (e) => {
        this.setState({'comment': e.target.value})
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
                onTouchTap={this.handleWrite}
            />
        ];
        return (

            <Dialog
                actions={actions}
                title="글쓰기"
                modal={true}
                open={this.props.modal.modalState}
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
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => {
            dispatch(close());
        },
        update: () => {
            dispatch(initComment());
        }
    }
};
WriteModal.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(undefined, mapDispatchToProps)(WriteModal);