import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import './index.css';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
