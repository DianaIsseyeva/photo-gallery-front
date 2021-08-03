import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import App from './App';
import store, {history} from "./store/configureStore";
import axios from './axios-exam12';

axios.interceptors.request.use(req => {
    const users = store.getState().users;
    if (users.user) req.headers["Authenticate"] = users.user.user.token;
    return req;
});

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
