import "./styles/BookInfoPage.css"
import {Navbar, Button, BookInfoCard, EditButton} from "../components"
import {Link, useParams} from "react-router-dom"


function BookInfoPage() {

  return (
    <div className="book-info-page-main">
        <Navbar />
        <div className="book-info-inner-page-main">
            <div className="book-info-section">
                <BookInfoCard />
            </div>
        </div>
    </div>
  )
}

export default BookInfoPage