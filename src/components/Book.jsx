import React, { useState } from 'react';
import initialBooks from '../utils/books';

function Book() {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) {
      alert('Judul dan Penulis wajib diisi!');
      return;
    }
    const bookToAdd = {
      id: books.length + 1,
      ...newBook,
      year: Number(newBook.year) || new Date().getFullYear(),
      image: newBook.image || `https://picsum.photos/300/200?random=${books.length + 1}`
    };
    setBooks([...books, bookToAdd]);
    setNewBook({ title: '', author: '', year: '', description: '', image: '' });
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Daftar Buku</h1>

      {/* Form tambah buku */}
      <form onSubmit={handleAddBook} className="mb-5">
        <h4>Tambah Buku Baru</h4>
        <div className="row g-3">
          <div className="col-md-4">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Judul Buku" 
              name="title" 
              value={newBook.title} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Penulis" 
              name="author" 
              value={newBook.author} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-2">
            <input 
              type="number" 
              className="form-control" 
              placeholder="Tahun" 
              name="year" 
              value={newBook.year} 
              onChange={handleChange} 
            />
          </div>
          <div className="col-md-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="URL Gambar" 
              name="image" 
              value={newBook.image} 
              onChange={handleChange} 
            />
          </div>
          <div className="col-12">
            <textarea 
              className="form-control" 
              placeholder="Deskripsi" 
              name="description" 
              value={newBook.description} 
              onChange={handleChange} 
              rows="2"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">Tambah Buku</button>
          </div>
        </div>
      </form>

      {/* Daftar buku */}
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img src={book.image} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text"><strong>Penulis:</strong> {book.author}</p>
                <p className="card-text"><strong>Tahun:</strong> {book.year}</p>
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;
