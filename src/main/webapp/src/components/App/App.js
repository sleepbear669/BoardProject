/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import Comments from './../Comments/Comments';
import NavBar from './../NavBar/NavBar';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <NavBar/>
                <Comments/>
            </MuiThemeProvider>
        )
    }
}

export default App;