import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store/store.factory'
import allRouter from './routing/route'
import history from './routing/history'
import { Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
                {allRouter}
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
