/**
 * Created by sleepbear on 2016. 6. 1..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'

import { createStore , applyMiddleware} from 'redux';
import { Provider  } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './containers/App'
import reducer from './reducers/index';
import configureStore from './store/configureStore';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
const testStore = configureStore();
ReactDOM.render(
    (
        <Provider store={testStore}>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <App/>
            </MuiThemeProvider>
        </Provider>
    ),
    document.getElementById('app')
);
