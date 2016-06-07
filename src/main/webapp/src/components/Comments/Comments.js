/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import axios from '../../utils/AxiosClient'
import style from './Comments.css'

class Comments extends React.Component{

    componentDidMount(){
        axios.get('/comments')
            .then( result => {
                this.setState({
                    comments : result.data
                })
            })
    }
    constructor(props){
        super(props);
        this.state = {
            comments: []
        };
    }

    render (){
        return (
                <ul>
                {
                    this.state.comments.map((comment, i) => {
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

class CommentInfo extends React.Component{
    render(){
        return(
            <li className={style.box}>
                <img src={"http://117.17.102.241:8080/static/image/" + this.props.comment.member.profileImage}/>
                <span>{this.props.comment.member.name}</span>
                <span>{this.props.comment.content}</span>
                <span>{this.props.comment.registeredDate}</span>
            </li>
        )
    }
}
export default Comments;