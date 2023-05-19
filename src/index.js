import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThanksSucess from './ThanksSucess';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const cadastrado = ReactDOM.createRoot(document.getElementById('cadastrado'));
cadastrado.render(
  <React.StrictMode>
    <ThanksSucess />
  </React.StrictMode>
);
