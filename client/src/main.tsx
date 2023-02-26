import React from 'react';
import ReactDOM from 'react-dom/client';

import Index from './Index';
import useAppStore from './store/app';

useAppStore.getState().initializeApp();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
);
