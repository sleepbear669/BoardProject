/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import axios from '../../utils/AxiosClient'
import { connect } from 'react-redux';
import { fetch } from '../../actions/Comment'

import style from './Comments.css'


class Comments extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {comments} = this.props.comments;
        return (
            <ul>
                {
                    comments.map((comment, i) => {
                        return (
                            <CommentInfo comment={comment}
                                         key={comment.id}
                            />

                        )
                    })
                }
            </ul>
        );
    }
}

class CommentInfo extends React.Component {
    render() {
        return (
            <li className={style.box}>
                <img src={"http://localhost:8080/static/image/" + this.props.comment.member.profileImage}/>
                <span>{this.props.comment.member.name}</span>
                <span>{this.props.comment.content}</span>
                <span>{this.props.comment.registeredDate}</span>
            </li>
        )
    }
}
export default Comments;