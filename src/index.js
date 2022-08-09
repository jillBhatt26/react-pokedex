import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/dist.css';
import AppContextProvider from './contexts/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </React.StrictMode>
);
