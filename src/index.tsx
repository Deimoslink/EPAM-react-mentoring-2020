import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from './core/store';
import App from './containers/app/App';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);
