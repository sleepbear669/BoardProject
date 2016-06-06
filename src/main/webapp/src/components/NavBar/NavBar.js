/**
 * Created by sleepbear on 2016. 6. 3..
 */
import React from 'react';
import style from './NavBar.css';
import {Link} from 'react-router';

export default class NavBar extends React.Component {

    render() {
        return (
            <div>
                <button>
                    <Link to='/signUp'>회원가입</Link>
                </button>
                <button>글쓰기</button>
            </div>
        )

    }
}