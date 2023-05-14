import React from 'react'
import "./styles/AllBooks.css"
import { useEffect, useState } from "react"
import axios from 'axios'
import {Navbar, Button, BookCard} from "../components"
import {Link} from "react-router-dom"

function AllBooks() {

    const [allBooks, setAllBooks] = useState([])

    useEffect(() => {
      axios.get("https://assessment-382621.appspot.com/bookapi").then(
        response => {
          setAllBooks(response.data)
        }
      ).catch(error => console.log("Error Fecthing Books:", error))
      console.log(allBooks)
    },[])

  return (
    <div className='all-books-main'>
        <Navbar />
        <div className='all-books-main-inner'>
          <div className='all-books-display'>
            <h1>All Books</h1>
            <div className='all-book-alphabet-filter'>
                {/* <h4>A</h4> */}
                <div className='all-book-alphabet-filter-card'>
                    {
                      allBooks.map((book, index) => {
                        return <BookCard 
                          bookTitle={book && book.title}
                          bookAuthor={book && book.author}
                          bookDate={book && book.date}
                          id={book && book.id}
                          key={index}
                        />
                      })
                    }
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AllBooks