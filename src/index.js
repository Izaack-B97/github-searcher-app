import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { GithubSearcherApp } from './GithubSearcherApp';

import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <BrowserRouter>
    <GithubSearcherApp />
  </BrowserRouter>
);

