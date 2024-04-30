// {/* <div class="container" >
//     <div class="header-content">
//         <img src="\assets\atom-logo.jpg" alt="">
//         <span>atom</span>
//     </div>

//     <div class="books-container">
//         <div class="books-label">Books</div>
//         <div> <button mat-flat-button color="primary" class="button-label" (click)="createBook()">Create New
//                 Book</button>
//         </div>
//     </div>

//     <mat-form-field class="search-field">
//         <mat-icon matSuffix>search</mat-icon>
//         <input matInput placeholder="Search" class="search-input" [(ngModel)]="searchTerm" (ngModelChange)="filterBooks(searchTerm)">
//     </mat-form-field>

//     <div class="books-list">
//         <div class="all-books-heading" *ngIf="!noResultsFound">All Books</div>
//         <div class="all-books-heading" *ngIf="noResultsFound">No results found</div>
//         <div class="books-wrap"  *ngIf="!noResultsFound">
//             <div class="each-book-container" *ngFor="let book of filteredBooks">
//                 <div class="book-heading">{{book.volumeInfo?.title || book?.title || ' ---'}}</div>
//                 <div>
//                     <div class="book-info">Authors: {{book.volumeInfo?.authors?.join(', ') || book?.authors|| ' ---'}} </div>
//                     <div class="book-info">Publisher: {{book.volumeInfo?.publisher || book?.publisher|| ' ---'}}</div>
//                     <div class="book-info">Published Date: {{book.volumeInfo?.publishedDate || book?.publishedDate|| ' ---'}}</div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div> */}


import React, { useState, useEffect } from 'react';
// import './App.css';

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep');
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
   <>
     <div class="header-content">
        <img src="\assets\atom-logo.jpg" alt=""/>
        <span>atom</span>
    </div>

    <div class="books-container">
        <div class="books-label">Books</div>
        <div> <button mat-flat-button color="primary" class="button-label" click="createBook()">Create New
                Book</button>
        </div>
    </div>
      <div className="books-container">
        {books.map(book => (
          <div key={book.id} className="book">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
            <p>{book.volumeInfo.publishedDate}</p>
            <p>{book.volumeInfo.description}</p>
          </div>
        ))}
      </div>
   </>
  );
}

export default BooksList;
