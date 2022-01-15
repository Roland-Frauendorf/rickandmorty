import React from 'react';
import ReactDOM from 'react-dom';
import Providers from './providers';
import Page from './page/page';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <Page />
        </Providers>
    </React.StrictMode>,
    document.getElementById('root'),
);
