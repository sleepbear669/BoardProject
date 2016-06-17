/**
 * Created by sleepbear on 2016. 6. 11..
 */

import React from 'react'

import {connect} from 'react-redux';

import ProfileEdit from '../components/profileModify/ProfileEdit';

import {edit} from '../actions/User';

class ProfileModifyContainer extends React.Component {

    render() {
        return (
            <ProfileEdit {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        edit: (member) => {
            dispatch(edit(member))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModifyContainer);
