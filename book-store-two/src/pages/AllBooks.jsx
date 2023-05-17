import React from 'react'
import "./styles/AllBooks.css"
import { useEffect, useState } from "react"
import axios from 'axios'
import {Navbar, Button, BookCard, Loading, SideBar, CardSkeleton} from "../components"
import {Link} from "react-router-dom"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ReactPaginate from 'react-paginate';

function AllBooks() {

    const [allBooks, setAllBooks] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      axios.get("https://assessment-386911.appspot.com/bookapi").then(
        response => {
          setAllBooks(response.data)
          setLoading(true);
        }
      ).catch(error => console.log("Error Fecthing Books:", error))
      console.log(allBooks)
    },[])

    const booksPerPage = 20
    const pagesVisited = pageNumber * booksPerPage ;

    const displayBooks = allBooks.slice(pagesVisited, pagesVisited + booksPerPage)
    .map((book, index) => {
      return <BookCard 
                bookTitle={book && book.title}
                bookAuthor={book && book.author}
                bookDate={book && book.date}
                id={book && book.id}
                key={index}
              />
    })

    const pageCount = Math.ceil(allBooks.length / booksPerPage);
    const changePage = ({selected}) => {
      setPageNumber(selected)
    };

  return (
    <div className='all-books-main'>
        <SideBar />
        <div className='all-books-main-inner'>
          <div className='all-books-display'>
            <h1>All Books</h1>
            {/* <CardSkeleton /> */}
            { loading ?
            <div className='all-book-alphabet-filter'>
                <div className='all-book-alphabet-filter-card'>
                    {displayBooks}
                </div>
            </div> : <Loading />
            }
          </div>
        </div>
        { loading ?
        <div className="pagination-container">
          <ReactPaginate 
              previousLabel={"< Previous"}
              nextLabel={"Next >"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName='pagination-main-contaiiner'
              previousClassName='previous-btn'
              nextClassName='next-btn'
              disabledClassName='btn-diasabled'
              activeClassName='active-page'
          />
        </div> : ""
        } 
    </div>
  )
}

export default AllBooks