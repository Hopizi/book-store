import "./styles/BookCard.css"
import React from "react"
import {Link} from "react-router-dom"

function BookCard({bookTitle, bookAuthor, bookDate, id}) {
  return (
      <div className="book-card-main">
        <Link to={`/book/${id}`}>
          <div className="book-card-main-inner">
          <h3>{bookTitle}</h3>
          <p>{bookAuthor}</p>
          <p>{bookDate}</p>
          </div>
          </Link>
      </div>
  )
}

export default BookCard