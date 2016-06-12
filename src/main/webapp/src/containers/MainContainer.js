
/**
 * Created by sleepbear on 2016. 6. 11..
 */
import React from 'react';
import { connect } from 'react-redux';


import Main from '../components/main/Main'

import {initComment} from '../actions/Comment'

const propTypes = {
    dispatch: React.PropTypes.func
};


class MainContainer extends React.Component{

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(initComment());
    }

    render(){
        return (
            <Main  {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comment : state.commentReducer,
        user : state.userReducer,
        modal : state.modalReducer
    };
};

MainContainer.propTypes = propTypes;
export default connect(mapStateToProps)(MainContainer);