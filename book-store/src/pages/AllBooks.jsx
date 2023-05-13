import React from 'react'
import "./styles/AllBooks.css"
import {Navbar, Button, BookCard} from "../components"

function AllBooks() {
  return (
    <div className='all-books-main'>
        <Navbar />
        <div className='all-books-main-inner'>
            <h1>All Books</h1>
            <div className='all-book-alphabet-filter'>
                <h4>A</h4>
                <div className='all-book-alphabet-filter-card'>
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllBooks