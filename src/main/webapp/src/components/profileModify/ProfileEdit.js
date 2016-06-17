/**
 * Created by sleepbear on 2016. 6. 4..
 */

import React from 'react';
import axios from '../../utils/AxiosClient';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const editStyle = {
    box : {
        display: 'flex',
        alignItems : 'center',
        justifyContent: 'center'
    },
    item : {
        flex : 1
    }
};

class ProfileEdit extends React.Component {

    fileUpload = () => {
        var tempObj = {profileImage: this.refs.fileData.files[0]};
        this.setState(tempObj);
    };

    componentWillMount(){
        let propsMember = Object.assign({},this.props.user.member);
        this.setState({
            memberData: propsMember,
            profileImage: {}
        })
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
                this.props.edit(result.data);
                this.context.router.push('/');
            }).catch(function (res) {
        });
    };

    render() {
        return (
            <div style={editStyle.box}>
                <div>
                    <div>
                        <span>아이디</span>
                        <TextField
                            type="type"
                            defaultValue={this.state.memberData.accountName}
                            disabled={true}/>
                    </div>
                    <div>
                        <span>비밀번호</span>
                        <TextField
                            type="password"
                            name="password"
                            value={this.state.memberData.password}
                            onChange={this.handleChange}/>
                    </div>
                    <div>
                        <span>이름</span>
                        <TextField
                            type="text"
                            name="name"
                            value={this.state.memberData.name}
                            onChange={this.handleChange}/>
                    </div>
                    <div>
                        <span>소개</span>
                        <TextField
                            type="text"
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
            </div>
        )
    }
}

ProfileEdit.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default ProfileEdit;