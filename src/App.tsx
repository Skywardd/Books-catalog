import React, { useState } from 'react';
import InputForm from './components/InputForm';
import './App.css'

interface Book {
  id:string;
  volumeInfo:{
    title: string;
    authors: string[];
    imageLinks:{
      thumbnail: string;
    };
    language: string;
    previewLink: string;
  };
};

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(0); 



  const handleSearch = (items: Book[]) => {
    setBooks(items);
    setCurrentPage(1); // reset to first page on new search
  
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(page)
  };

  const pageSize = 10;
  const totalPages = Math.ceil(books.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageBooks = books.slice(startIndex, endIndex);

  return (
    <div className="App">
      <InputForm onSearch={handleSearch} />
      <ul className = "book-list">
        {pageBooks.map(book => (  
  
          <li className="book-listing" key={book.id}>
            <img src={
      book.volumeInfo.imageLinks === undefined
        ? ""
        : `${book.volumeInfo.imageLinks.thumbnail}`
  } alt={book.volumeInfo.title} />
            <h2 className = "book-tittle">{book.volumeInfo.title}</h2>
            <p className ="book-author">By {book.volumeInfo.authors}</p>
            <p className ="book-language">Language: {book.volumeInfo.language}</p>
            <a className="book-link"href={book.volumeInfo.previewLink}>Buy</a>
          </li>
        ))}
      </ul>
      <div>
        {currentPage > 1 && (
          <button className='pagination-button' onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button className='pagination-button' onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default App;