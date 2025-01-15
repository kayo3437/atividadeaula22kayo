import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import History from './History';
import Team from './Team';

function About() {
  return (
    <div>
      <h1>Sobre</h1>
      <p>Esta é a página sobre nossa aplicação.</p>
      
      {/* Links para as sub-rotas */}
      <nav>
        <Link to="/about/history">História</Link> | 
        <Link to="/about/team">Equipe</Link>
      </nav>
      
      {/* Definindo sub-rotas dentro de About */}
      <Routes>
        <Route path="history" element={<History />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default About;
