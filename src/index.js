import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import App6 from './components/App6';
import App7 from './components/App7';
import Formulario from './components/Formulario';
import Titulo from './components/Hello';
import {Lista, Item} from './components/Lista';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App7></App7>
    <App6></App6>
    <Titulo text="Hello"></Titulo>
    <Formulario></Formulario>
    <Lista>
    <Item key={999} id={999} completo={true}>teste</Item>
    <Item key={1000} id={1000} completo={false}>teste2</Item>
    </Lista>
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
