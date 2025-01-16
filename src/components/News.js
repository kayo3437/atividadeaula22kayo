import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Article1 from './Article1';
import Article2 from './Article2';

function News() {
  return (
    <div>
      <h1>Notícias</h1>
      <nav>
        <Link to="article1">Artigo 1</Link> | 
        <Link to="article2">Artigo 2</Link>
      </nav>
      <Routes>
        <Route path="article1" element={<Article1 />} />
        <Route path="article2" element={<Article2 />} />
      </Routes>
    </div>
  );
}

export default News;
