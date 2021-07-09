import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App5></App5>
    <App4></App4>
    <App3></App3>
    <App2 title="Titulo">
      Conteúdo
    </App2>
    
    <App2 title="Titulo2">
      Conteúdo2
    </App2>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
