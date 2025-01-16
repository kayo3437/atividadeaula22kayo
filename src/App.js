import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Blog from './components/Blog';
import News from './components/News';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Página Inicial</Link> | 
        <Link to="/about">Sobre</Link> | 
        <Link to="/contact">Contato</Link> | 
        <Link to="/services">Serviços</Link> | 
        <Link to="/blog">Blog</Link> | 
        <Link to="/news">Notícias</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news/*" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
