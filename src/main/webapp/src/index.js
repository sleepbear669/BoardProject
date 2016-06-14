/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider  } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './containers/App'
import configureStore from './store/configureStore';

const store = configureStore();
ReactDOM.render(
    (
        <Provider store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <App/>
            </MuiThemeProvider>
        </Provider>
    ),
    document.getElementById('app')
);
