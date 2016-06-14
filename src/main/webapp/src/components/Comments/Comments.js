/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import axios from '../../utils/AxiosClient'
import { connect } from 'react-redux';
import { initComment } from '../../actions/Comment'

import dateformat from 'dateformat';

import RaisedButton from 'material-ui/RaisedButton'
import style from './Comments.css'
import {orange200} from 'material-ui/styles/colors'
import {} from 'material-ui/'
class Comments extends React.Component {

    _handleRemove = (commentId, memberId) => {
        return () => {
            const { dispatch } = this.props;
            var api = '/comments/{commentId}/member/{memberId}'
                .replace("{commentId}", commentId)
                .replace("{memberId}", memberId);
            axios.get(api).then(result => {
                dispatch(initComment());
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
                                         member={user.member}
                                         key={i}
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

    milliToDate = millisecond => {
        let nowMilli = new Date().getTime();
        let lapseTime = nowMilli - millisecond;
        return lapseTime < 1000 * 60 * 60 * 24 ? lapseTime : (new Date(millisecond)).toString();
    };

    handleEmotion = (emotion , commentId, memberId)=> {
        return (event) => {
            console.log(emotion + commentId+ memberId);
        }
    };

    render() {
        const {comment, member} = this.props;

        let commentId = comment.id;
        let memberId = member.id;
        let writerId = comment.member.id;

        const commentDate = this.milliToDate(comment.registeredDate);
        const removeButton = writerId === memberId
            ? <RaisedButton
                backgroundColor={orange200}
                label="삭제"
                onTouchTap={this.props.delete(commentId, memberId)}/>
            : '';
        return (
            <li className={style.box}>
                <img src={"http://localhost:8080/static/image/" + comment.member.profileImage}/>
                <span>{comment.member.name}</span>
                <span>{comment.content}</span>
                <RaisedButton
                    label='추천'
                    primary={true}
                    onMouseUp={this.handleEmotion('RECOMMEND', commentId, memberId)}/>
                <RaisedButton
                    label='공감'
                    secondary={true}
                    onMouseUp={this.handleEmotion('EMPATHY', commentId, memberId)}/>
                {removeButton}
                <span>{commentDate}</span>
            </li>
        )
    }
}
export default Comments;