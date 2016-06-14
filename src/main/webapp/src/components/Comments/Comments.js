/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import axios from '../../utils/AxiosClient'
import { connect } from 'react-redux';
import { fetch } from '../../actions/Comment'

import dateformat from 'dateformat';

import RaisedButton from 'material-ui/RaisedButton'
import style from './Comments.css'
import {orange200} from 'material-ui/styles/colors'

class Comments extends React.Component {

    _handleRemove(commentId, memberId){
        return (e) => {
            var api = '/comments/{commentId}/member/{memberId}'
                .replace("{commentId}", commentId)
                .replace("{memberId}", memberId);
            axios.get(api).then(result => {
                console.log(result);
            })
        };
    };

    render() {
        const {comment, user} = this.props;
        return (
            <ul>
                {
                    comment.comments.map((comment, i) => {
                        return (
                            <CommentInfo comment={comment}
                                         key={i}
                                         member={user.member}
                                         id={comment.member.id}
                                         delete={this._handleRemove}

                            />

                        )
                    })
                }
            </ul>
        );
    }
}

class CommentInfo extends React.Component {

    milliToDate(millisecond) {
        let nowMilli = new Date().getTime();
        let lapseTime = nowMilli - millisecond;
        return lapseTime < 1000 * 60 * 60 * 24 ? lapseTime : (new Date(millisecond)).toString();
    }
    render() {
        const commentDate = this.milliToDate(this.props.comment.registeredDate);
        const removeButton = this.props.member.id === this.props.id ?
            <RaisedButton
                backgroundColor={orange200}
                label="삭제"
                onTouchTap={this.props.delete(this.props.comment.id, this.props.id)}
            /> : '';
        return (
            <li className={style.box}>
                <img src={"http://localhost:8080/static/image/" + this.props.comment.member.profileImage}/>
                <span>{this.props.comment.member.name}</span>
                <span>{this.props.comment.content}</span>
                {removeButton}
                <span>{commentDate}</span>
            </li>
        )
    }
}
export default Comments;