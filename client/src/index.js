// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const reactElement = document.getElementById('root');
const root = ReactDOM.createRoot(reactElement);
root.render(
  <Router>
    <App />
  </Router>
);

reportWebVitals();