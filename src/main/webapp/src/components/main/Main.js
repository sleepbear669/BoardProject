/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import { connect } from 'react-redux';

import Comments from '../comments/Comments';
import NavBar from '../navBar/NavBar';
import WriteModal from '../writeModal/WriteModal'
import PageLocation from '../pageLocation/PageLocation'


class Main extends React.Component {

    render() {
        return (
                <div>
                    <NavBar
                        {...this.props}
                    />
                    <Comments
                        {...this.props}

                    />
                    <WriteModal
                        {...this.props}
                    />
                    <PageLocation
                        fetch = {this.props.fetch}
                        page = {this.props.comments.page}
                    />
                </div>
        )
    }
}
export default Main;