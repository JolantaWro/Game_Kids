import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Start from './components/Start';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import SimpleGame from './components/SimpleGame';
import EasyGame from './components/EasyGame'
import GameAdd from './components/GameAdd';

const routing = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}/>
      <Route path='/gameAdd' element={<GameAdd />}/>
      <Route path='/gameOne' element={<EasyGame />}/>
      <Route path='/gameTwo' element={<SimpleGame />}/>
    </Routes>
  </BrowserRouter>
)


ReactDOM.render(routing, document.getElementById('rest'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
