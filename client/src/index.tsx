import { createRoot } from 'react-dom/client';
import { App } from './components/app';
import { store } from './store';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize';
import './index.css';
import React from 'react';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);
container.render(
    <React.StrictMode>
        <Provider store={store}>
            <Normalize />
            <App />
        </Provider>
    </React.StrictMode>
);
