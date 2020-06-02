import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store, {history} from './core/store';
import App from './containers/app/App';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {ConnectedRouter} from 'connected-react-router';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);
