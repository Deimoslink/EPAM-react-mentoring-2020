import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from './core/store';
import App from './containers/app/App';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
