import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import STORE from './Store';
import App from './App';

ReactDOM.render(
    <App store={STORE} />,
    document.getElementById('root'),
);
