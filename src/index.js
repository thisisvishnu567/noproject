import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import favicon from './favicon.png';

const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon;
document.head.appendChild(link);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
