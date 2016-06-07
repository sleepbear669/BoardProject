/**
 * Created by sleepbear on 2016. 6. 4..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from '../../utils/AxiosClient';
import { Router, Route, Link ,hashHistory} from 'react-router';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            memberData: {
                memberId: "",
                password: "",
                name: "",
                description: ""
            },
            profileImage: {}
        };
        this.fileUpload = this.fileUpload.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleJoinClick = this.handleJoinClick.bind(this);
    }

    fileUpload() {
        var tempObj = {profileImage: this.refs.fileData.files[0]};
        this.setState(tempObj);
    }

    handleChange(e) {
        var tempMember = {memberData: this.state.memberData};
        tempMember.memberData[e.target.name] = e.target.value;
        this.setState(tempMember);
    }

    handleJoinClick() {
        var formData = new FormData();
        let member = this.state.memberData;
        for (let key in member) {
            formData.append(key, member[key]);
        }

        formData.append('upload', this.state.profileImage);
        axios.post('/signUp', formData)
            .then(result => {
                console.log(result);
            }).catch(function (res) {
            if (res instanceof Error) {
                console.log(res.message);
            } else {
                console.log(res.data);
            }
        });
        this.context.router.push('/');
    }

    render() {
        return (
            <div>
                <div>
                    <span>아이디</span>
                    <input
                        type="text"
                        name="memberId"
                        value={this.state.memberData.id}
                        onChange={this.handleChange}/>
                </div>
                <div>
                    <span>비밀번호</span>
                    <input type="password"
                           name="password"
                           value={this.state.memberData.password}
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <span>이름</span>
                    <input type="text"
                           name="name"
                           value={this.state.memberData.name}
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <span>소개</span>
                    <input type="text"
                           name="description"
                           value={this.state.memberData.introduce}
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <span>이미지</span>
                    <input type="file" name="upload" ref="fileData" onChange={this.fileUpload}/>
                </div>
                <button onClick={this.handleJoinClick}>가입1</button>
            </div>
        )
    }
}

SignUp.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default SignUp;