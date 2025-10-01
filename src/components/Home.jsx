import React from 'react';
import books from '../utils/books';

function Home() {
  return (
    <div className="container my-5">
      {/* Konten utama buku Atomic Habits */}
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg mb-5">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Atomic Habits: Perubahan kecil yang memberikan hasil luar biasa</h1>
          <p className="lead">Cara mudah dan terbukti untuk membantu kebiasaan baik dan menghilangkan kebiasaan buruk.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="https://picsum.photos/720/600" alt="Buku Atomic Habits" width="720" />
        </div>
      </div>

      {/* Tampilkan 3 buku pertama */}
      <h2 className="mb-4">Rekomendasi Buku Lain</h2>
      <div className="row">
        {books.slice(0, 3).map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img src={book.image} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text"><strong>Penulis:</strong> {book.author}</p>
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
