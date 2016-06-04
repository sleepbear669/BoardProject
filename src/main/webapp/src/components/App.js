/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import Comments from './Comments/Comments';
import NavBar from './NavBar/NavBar';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Comments/>
            </div>
        )
    }
}

export default App;