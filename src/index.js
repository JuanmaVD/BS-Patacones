import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Register } from './RegistrarUsuario/Register';
import { NavBar } from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//rutas
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>INICIO</h1>}></Route>
      <Route path='/registrarEmpleado' element={<Register />}></Route>
      /</Routes>
  </BrowserRouter>

);
reportWebVitals();
