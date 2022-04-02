import React from 'react';
import ReactDOM from 'react-dom';
import Providers from './providers';
import Page from './page/page';
import './index.css';

ReactDOM.render(
    <Providers>
        <Page />
    </Providers>,
    document.getElementById('root'),
);
