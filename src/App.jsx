import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Team from './components/Team';
import Contact from './components/Contact';
import Book from './components/Book';

function NotFound() {
  return (
    <div className="container my-5 text-center">
      <h1 className="display-4">404 - Halaman Tidak Ditemukan</h1>
      <p className="lead">Kembali ke <a href="/">Home</a>.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book" element={<Book />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
