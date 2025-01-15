import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Section1 from './Section1';
import Section2 from './Section2';

function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo à página inicial da aplicação!</p>
      
      {/* Links para as sub-rotas */}
      <nav>
        <Link to="/home/section1">Seção 1</Link> | 
        <Link to="/home/section2">Seção 2</Link>
      </nav>
      
      {/* Definindo sub-rotas dentro da Home */}
      <Routes>
        <Route path="section1" element={<Section1 />} />
        <Route path="section2" element={<Section2 />} />
      </Routes>
    </div>
  );
}

export default Home;
