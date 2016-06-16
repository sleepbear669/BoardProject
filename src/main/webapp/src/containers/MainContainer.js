
/**
 * Created by sleepbear on 2016. 6. 11..
 */
import React from 'react';
import { connect } from 'react-redux';


import Main from '../components/main/Main'

import {fetchComment} from '../actions/Comment'

const propTypes = {
    dispatch: React.PropTypes.func
};


class MainContainer extends React.Component{

    componentDidMount(){
        this.props.fetch();
    }

    render(){
        return (
            <Main  {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments : state.commentReducer,
        user : state.userReducer,
        modal : state.modalReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetch : (pageNum = 0) => {
            dispatch(fetchComment(pageNum))
        }
    }
};
MainContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);