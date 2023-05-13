import "./styles/BookInfoPage.css"
import {Navbar, Button, BookInfoCard} from "../components"
import {Link} from "react-router-dom"

function BookInfoPage() {
  return (
    <div className="book-info-page-main">
        <Navbar />
        <div className="book-info-inner-page-main">
            <div className="book-info-section">
                <BookInfoCard />
                <div className="book-info-useful-btns">
                    <Link to='/editbook'><Button btnTitle='Edit'/></Link>
                    <Button btnTitle='Delete' style='redbg'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookInfoPage