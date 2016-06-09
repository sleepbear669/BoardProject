/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Comments from './../Comments/Comments';
import NavBar from './../NavBar/NavBar';
import {fetchComments} from '../../actions/Comment'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mapStateToProps = (state) => {
    return {
        comments : state.comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComment : () => {
            dispatch(fetchComments());
        }
    }
};


@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {

    componentDidMount(){
        this.updateComments()
    }

    updateComments = () => {
        this.props.fetchComment();
    };
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <NavBar/>
                    <Comments
                        comments={this.props.comments}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}
export default App;