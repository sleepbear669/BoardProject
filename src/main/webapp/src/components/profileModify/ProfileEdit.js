/**
 * Created by sleepbear on 2016. 6. 4..
 */

import React from 'react';
import axios from '../../utils/AxiosClient';

class ProfileEdit extends React.Component {

    fileUpload = () => {
        var tempObj = {profileImage: this.refs.fileData.files[0]};
        this.setState(tempObj);
    };

    componentWillMount(){
        let propsMember = Object.assign({},this.props.user.member);
        console.log(this.props.user.member);
        this.setState({
            memberData: propsMember,
            profileImage: {}
        })
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    handleChange = (e) => {
        var tempMember = {memberData: this.state.memberData};
        tempMember.memberData[e.target.name] = e.target.value;
        this.setState(tempMember);
    };
    handleCancelClick = () => {
        this.context.router.goBack();
    };
    handleEditClick = () => {
        var formData = new FormData();
        let member = this.state.memberData;
        for (let key in member) {
            formData.append(key, member[key]);
        }
        formData.append('upload', this.state.profileImage);
        formData.append('id', this.props.user.member.id);
        axios.post('/edit', formData)
            .then(result => {
                console.log(result);
                this.context.router.push('/');
            }).catch(function (res) {
        });
    };

    render() {
        return (
            <div>
                <div>
                    <span>아이디</span>
                    <span>{this.state.memberData.accountName}</span>
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
                           Value={this.state.memberData.name}
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <span>소개</span>
                    <input type="text"
                           name="description"
                           value={this.state.memberData.description}
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <span>이미지</span>
                    <input type="file" name="upload" ref="fileData" onChange={this.fileUpload}/>
                </div>
                <img src={"http://localhost:8080/static/image/" + this.props.user.member.profileImage}/>
                <button onClick={this.handleEditClick}>수정</button>
                <button onClick={this.handleCancelClick}>취소</button>
            </div>
        )
    }
}

ProfileEdit.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default ProfileEdit;