import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

// Remove the require statement since we don't need it for now
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/TalinPersonalPortfolio">
      <App />
    </Router>
  </React.StrictMode>
);