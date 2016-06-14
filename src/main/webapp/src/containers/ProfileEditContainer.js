/**
 * Created by sleepbear on 2016. 6. 11..
 */

import React from 'react'

import {connect} from 'react-redux';

import ProfileEdit from '../components/profileModify/ProfileEdit';

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

export default connect(mapStateToProps)(ProfileModifyContainer);
