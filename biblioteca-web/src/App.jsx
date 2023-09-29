import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Login} from './components/Login.jsx';
import { Libros } from './components/Libros.jsx';

export default function App() {
  return (
  
    <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route path="/Libros" element={<Libros/>}></Route>
    </Routes>
    
  );
}

